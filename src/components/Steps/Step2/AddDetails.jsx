import React from 'react';
import * as Yup from 'yup';
import { useField } from 'formik';
import {
  ContentBox2,
  FieldContainer,
  Label2,
  Input2,
  ErrorText,
} from './AddDetails.styled';
import { ButtonBox, Button } from 'pages/AddPetPage/AddPetPage.styled';
import { Formik, Form } from 'formik';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { colors } from '../../../constants/colors';

const validationAddDetails = Yup.object().shape({
  title: Yup.string().when('category', {
    is: category => ['sell', 'lost/found', 'in good hands'].includes(category),
    then: () => Yup.string().required('Title is required'),
  }),
  namePets: Yup.string()
    .required('Required field')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be no more than 16 characters'),
  dateOfBirth: Yup.string()
    .required('Date is required')
    .matches(
      /^(0[1-9]|1[0-9]|2[0-9]|3[01])\.(0[1-9]|1[012])\.\d{4}$/,
      'Invalid date format (dd.mm.yyyy)'
    )
    .test(
      'not-in-future',
      'Date should not exceed the current date',
      function (value) {
        const currentDate = new Date();
        const inputDate = new Date(
          value.substring(6),
          value.substring(3, 5) - 1,
          value.substring(0, 2)
        );
        return inputDate <= currentDate;
      }
    ),
  typePets: Yup.string()
    .required('Required field')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be no more than 16 characters'),
});

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FieldContainer>
      <Label2>{label}</Label2>
      <Input2 {...field} {...props} error={meta.error} />
      {meta.touched && meta.error ? (
        <ErrorText className="error">{meta.error}</ErrorText>
      ) : null}
    </FieldContainer>
  );
};

export default function AddDetails(props) {
  const handleSubmit = values => {
    props.next(values);
  };

  const choosedCategory = props.data.category;

  return (
    <Formik
      initialValues={props.data}
      onSubmit={handleSubmit}
      validationSchema={validationAddDetails}
    >
      {({ values }) => (
        <Form>
          {choosedCategory === 'your pet' && (
            <ContentBox2>
              <Input
                type="text"
                name="namePets"
                label="Pet’s name"
                placeholder="Type name pet"
              />
              <Input
                type="text"
                name="dateOfBirth"
                label="Date of birth"
                placeholder="Type date of birth"
              />
              <Input
                type="text"
                name="typePets"
                label="Type"
                placeholder="Type of pet"
              />
            </ContentBox2>
          )}
          {choosedCategory !== 'your pet' && (
            <ContentBox2>
              <Input
                type="text"
                name="title"
                label="Title of add"
                placeholder="Title of add"
              />
              <Input
                type="text"
                name="namePets"
                label="Pet’s name"
                placeholder="Type name pet"
              />
              <Input
                type="text"
                name="dateOfBirth"
                label="Date of birth"
                placeholder="Type date of birth"
              />
              <Input
                type="text"
                name="typePets"
                label="Type"
                placeholder="Type of pet"
              />
            </ContentBox2>
          )}
          <ButtonBox $step2 category={choosedCategory}>
            <Button type="submit" $primary >
              Next&nbsp;&nbsp;
              <SvgIcon id={'icon-pawprint-1'} color={'none'} />
            </Button>
            <Button type="button" onClick={() => props.back(values)}>
              <SvgIcon id={'icon-arrow-left'} color={colors.blueColor} />
              &nbsp;&nbsp;Back
            </Button>
          </ButtonBox>
        </Form>
      )}
    </Formik>
  );
}
