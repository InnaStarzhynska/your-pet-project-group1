import AddPetForm from 'components/AddPetForm/AddPetForm';
import {
  Wrapper,
  Title,
  FormContainer,
  ButtonBox,
  Button,
  ErrorText,
} from './AddPetPage.styled';
import Stepper from '../../components/Stepper/Stepper';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { colors } from '../../constants/colors';
import * as Yup from 'yup';
import { addNotice } from 'redux/operations/fetchNotices';
import { addPet } from 'redux/operations/fetchUser';

export const FormContext = createContext();

//---------------------------------------Validation---------------------------------
const validationAddPetForm = (currentStep, dataPets) => {
  const { category } = dataPets;
  if (currentStep === 1) {
    const validationStep1 = Yup.object().shape({
      category: Yup.string()
        .oneOf(['your pet', 'sell', 'lost/found', 'in good hands'])
        .required('Сhoose one of the categories! '),
    });

    return validationStep1;
  } else if (currentStep === 2) {
    if (category === 'your pet') {
      const validationStep2 = Yup.object().shape({
        namePets: Yup.string()
          .required('Required field')
          .min(2, 'Name must be at least 2 characters')
          .max(16, 'Name must be no more than 16 characters'),
        dateOfBirth: Yup.date().required('Required field'),
        typePets: Yup.string()
          .required('Required field')
          .min(2, 'Name must be at least 2 characters')
          .max(16, 'Name must be no more than 16 characters'),
      });
      return validationStep2;
    }

    const validationStep2 = Yup.object().shape({
      title: Yup.string().required('Required field'),
      namePets: Yup.string()
        .required('Required field')
        .min(2, 'Name must be at least 2 characters')
        .max(16, 'Name must be no more than 16 characters'),
      dateOfBirth: Yup.date().required('Required field'),
      typePets: Yup.string()
        .required('Required field')
        .min(2, 'Name must be at least 2 characters')
        .max(16, 'Name must be no more than 16 characters'),
    });
    return validationStep2;
  } else if (currentStep === 3) {
    if (category === 'your pet') {
      const validationStep3 = Yup.object().shape({
        // imagesPets: Yup.mixed().required('Required field'),
        comments: Yup.string().max(
          120,
          'Comments must be no more than 120 characters'
        ),
      });
      return validationStep3;
    } else if (category === 'sell') {
      const validationStep3 = Yup.object().shape({
        // imagesPets: Yup.mixed()
        //   .test('fileSize', 'File size is too large', value => {
        //     if (!value) return true;
        //     return value.size <= 3 * 1024 * 1024;
        //   })
          // .required('Required field'),
        gender: Yup.string()
          .oneOf(['Male', 'Female'])
          .required('Choose a gender!'),
        location: Yup.string()
          .matches(
            /^[A-Z][a-z]+(,\s[A-Z][a-z]+)*$/,
            'Invalid city format. Use format like "Kyiv, Brovary"'
          )
          .required('Location is required'),
        price: Yup.number()
          .moreThan(0, 'Price must be greater than 0')
          .required('Required field'),
        comments: Yup.string().max(
          120,
          'Comments must be no more than 120 characters'
        ),
      });
      return validationStep3;
    }
    const validationStep3 = Yup.object().shape({
      // imagesPets: Yup.mixed()
      //   .test('fileSize', 'File size is too large', value => {
      //     if (!value) return true;
      //     return value.size <= 3 * 1024 * 1024;
      //   })
      //   .required('Required field'),
      gender: Yup.string()
        .oneOf(['Male', 'Female'])
        .required('Choose a gender!'),
      location: Yup.string()
        .matches(
          /^[A-Z][a-z]+(,\s[A-Z][a-z]+)*$/,
          'Invalid city format. Use format like "Kyiv, Brovary"'
        )
        .required('Location is required'),
      comments: Yup.string().max(
        120,
        'Comments must be no more than 120 characters'
      ),
    });
    return validationStep3;
  }
};

export default function AddPetPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dataPets, setDataPets] = useState({
    category: '',
    namePets: '',
    dateOfBirth: '',
    typePets: '',
    imagesPets: '',
    comments: '',
    title: '',
    gender: '',
    location: '',
    price: '',
  });
  const [activeStep, setActiveStep] = useState(1);
  const handleNextStep = () => {
    if (activeStep === 3) {
      submitedDataPets();
      return ;
    }
    setActiveStep(prevState => prevState + 1);
  };

  const writeFile = (img) => {
    setDataPets({...dataPets, imagesPets: img})
  };

  const handlePrevStep = () => {
    if (activeStep === 1) {
      navigate(-1);
    }
    setActiveStep(prevState => prevState - 1);
  };

  const renderButton = activeStep => {
    return (
      <ButtonBox>
        <Button type="submit" $primary>
          {activeStep === 3 ? 'Done' : 'Next'}&nbsp;&nbsp;
          <SvgIcon id={'icon-pawprint-1'} color={'none'} />
        </Button>
        <Button type="button" onClick={() => handlePrevStep()}>
          <SvgIcon id={'icon-arrow-left'} color={colors.blueColor} />
          &nbsp;&nbsp;
          {activeStep === 1 ? 'Cancel' : 'Back'}
        </Button>
      </ButtonBox>
    );
  };


//---------------------------------------SUBMIT---------------------------------
  const submitedDataPets = () => {
    const formData = new FormData();

    if (dataPets.category === 'your pet') {
      formData.append('category', dataPets.category);
      formData.append('namePets', dataPets.namePets);
      formData.append('dateOfBirth', dataPets.dateOfBirth);
      formData.append('typePets', dataPets.typePets);
      formData.append('imagesPets', dataPets.imagesPets);
      formData.append('comments', dataPets.comments);

      dispatch(addPet(formData))
      // for (const pair of formData.entries()) {
      //   console.log(`${pair[0]}, ${pair[1]}`);
      // }
      return;
    }
    if (dataPets.category === 'sell') {
      formData.append('category', dataPets.category);
      formData.append('namePets', dataPets.namePets);
      formData.append('dateOfBirth', dataPets.dateOfBirth);
      formData.append('typePets', dataPets.typePets);
      formData.append('imagesPets', dataPets.imagesPets);
      formData.append('comments', dataPets.comments);
      formData.append('title', dataPets.title);
      formData.append('gender', dataPets.gender);
      formData.append('location', dataPets.location);
      formData.append('price', dataPets.price);

      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }

      return;
    }
    formData.append('category', dataPets.category);
    formData.append('namePets', dataPets.namePets);
    formData.append('dateOfBirth', dataPets.dateOfBirth);
    formData.append('typePets', dataPets.typePets);
    formData.append('imagesPets', dataPets.imagesPets);
    formData.append('comments', dataPets.comments);
    formData.append('title', dataPets.title);
    formData.append('gender', dataPets.gender);
    formData.append('location', dataPets.location);

    return;
  };

  console.log('dataPets->', dataPets);



//---------------------------------------RENDER---------------------------------
  const changeSpecificStyle =
    dataPets.category !== 'your pet' && activeStep === 3;

  return (
    <FormContext.Provider value={{ dataPets, setDataPets }}>
      <Wrapper width={changeSpecificStyle}>
        <Formik
          initialValues={dataPets}
          onSubmit={values => {
            console.log(values);
            setDataPets({ ...dataPets, ...values });
            handleNextStep();
          }}
          validationSchema={validationAddPetForm(activeStep, dataPets)}
          validateOnBlur={false}
        >
          <FormContainer padding={changeSpecificStyle}>
            <div>
              <Title>Add Pet</Title>
              <Stepper currentStep={activeStep} />
              <AddPetForm currentStep={activeStep} />
              <ErrorMessage name="category">
                {msg => <ErrorText>{msg}</ErrorText>}
              </ErrorMessage>
            </div>
            <div>{renderButton(activeStep)}</div>
          </FormContainer>
        </Formik>
      </Wrapper>
    </FormContext.Provider>
  );
}