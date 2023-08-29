import React, { useContext, useState } from 'react';
import * as Yup from 'yup';
// import { FormContext } from '../../../pages/AddPetPage/AddPetPage';
import { ErrorMessage, Field, useField } from 'formik';
import { ContentBox2, Label2, Input2 } from '../Step2/AddDetails.styled';
import {
  ContentBox3,
  BoxFieldImg,
  Label3,
  InputImg,
  Input3,
  StyleContainer,
  StyleContainer2,
  TitleRadio,
  RadioContainer,
  BoxFieldImg2,
  LabelImgSell,
  ErrorText,
  DecorBox,
  ButtonAddFile,
  ImitationLabel,
  ImgPets,
} from './AddMoreInfo.styled';
import { ButtonBox, Button } from 'pages/AddPetPage/AddPetPage.styled';
import { FieldContainer } from '../Step2/AddDetails.styled';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { colors } from '../../../constants/colors';
import { Formik, Form } from 'formik';

const validationAddMoreInfo = data => {
  if (data.category === 'your pet') {
    const validSchema = Yup.object().shape({
      // imagesPets: Yup.mixed()
      //   .required('Image is required')
      //   .test(
      //     'image',
      //     'Image size must be less then 3mb',
      //     value => value && value.size <= 3 * 1024 * 1024
      //   ),
      comments: Yup.string().max(
        120,
        'Comments must be no more than 120 characters'
      ),
    });

    return validSchema;
  }

  const validSchema = Yup.object().shape({
    // imagesPets: Yup.mixed()
    //   .required('Image is required')
    //   .test(
    //     'image',
    //     'Image size must be less then 3mb',
    //     value => value && value.size <= 3 * 1024 * 1024
    //   ),
    gender: Yup.string().oneOf(['male', 'female']).required('Choose a gender!'),
    location: Yup.string()
      .matches(
        /^[A-Z][a-z]+(,\s[A-Z][a-z]+)*$/,
        'Invalid city format. Use format like "Kyiv, Brovary"'
      )
      .required('Location is required'),
    price: Yup.number().when('category', {
      is: category => category === 'sell',
      then: () =>
        Yup.number()
          .moreThan(0, 'Price must be greater than 0')
          .required('Price is required'),
    }),
    comments: Yup.string().max(
      120,
      'Comments must be no more than 120 characters'
    ),
  });

  return validSchema;
};

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FieldContainer>
      <Label2>{label}</Label2>
      <Input2 {...field} {...props} isError={meta.error} />
      {meta.touched && meta.error ? (
        <ErrorText className="error">{meta.error}</ErrorText>
      ) : null}
    </FieldContainer>
  );
};

export default function AddMoreInfo(props) {
  const choosedCategory = props.data.category;

  ////////////////////////////////////////////////////////////
  const [urlImg, setUrlImg] = useState('');
  const [file, setFile] = useState('');

  const addFile = e => {
    console.log(e.target.files[0]);

    const file = e.target.files[0];
    setFile(file);
    const objectURL = window.URL.createObjectURL(file);
    setUrlImg(objectURL);

    console.log('objectURL->', objectURL);
  };

  const deleteFile = () => {
    setUrlImg('');
  };
  ////////////////////////////////////////////////////////////

  const handleSubmit = values => {
    console.log('values->', values);
    const updateValues = { ...values, imagesPets: file };
    console.log('updateValues->', updateValues);
    props.next(updateValues, true);
  };

  return (
    <Formik
      validationSchema={validationAddMoreInfo(props.data)}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          {choosedCategory === 'your pet' && (
            <ContentBox2>
              <BoxFieldImg>
                <div>
                  <ImitationLabel>Load the pet’s image:</ImitationLabel>
                  <ErrorMessage name="imagesPets">
                    {msg => <ErrorText $inputimg>{msg}</ErrorText>}
                  </ErrorMessage>
                </div>
                {!urlImg && (
                  <ButtonAddFile htmlFor="1">
                    <SvgIcon id={'icon-plus'} color={colors.blueColor} />
                  </ButtonAddFile>
                )}
                <InputImg
                  type="file"
                  name="imagesPets"
                  id="1"
                  accept="image/*"
                  onChange={addFile}
                />
                {urlImg && (
                  <ImgPets src={urlImg} alt="pets" onClick={deleteFile} />
                )}
              </BoxFieldImg>
              <Input
                as="textarea"
                name="comments"
                label="Comments"
                placeholder="Type of pet"
                $textarea
              />
            </ContentBox2>
          )}
          {choosedCategory === 'sell' && (
            <ContentBox3>
              <StyleContainer>
                <TitleRadio>The Sex</TitleRadio>
                <DecorBox>
                  <RadioContainer>
                    <label htmlFor="1">
                      <Field type="radio" name="gender" value="female" id="1" />
                      Female
                    </label>
                    <label htmlFor="2">
                      <Field type="radio" name="gender" value="male" id="2" />
                      Male
                    </label>
                  </RadioContainer>
                  <ErrorMessage name="gender">
                    {msg => <ErrorText>{msg}</ErrorText>}
                  </ErrorMessage>
                </DecorBox>
                <BoxFieldImg2>
                  <ImitationLabel $sell>
                    Load the pet’s image:
                    <ErrorMessage name="imagesPets">
                      {msg => <ErrorText>{msg}</ErrorText>}
                    </ErrorMessage>
                  </ImitationLabel>
                  {!urlImg && (
                    <ButtonAddFile htmlFor="3">
                      <SvgIcon id={'icon-plus'} color={colors.blueColor} />
                    </ButtonAddFile>
                  )}
                  <InputImg
                    type="file"
                    name="imagesPets"
                    id="3"
                    accept="image/*"
                    onChange={addFile}
                  />
                  {urlImg && (
                    <ImgPets src={urlImg} alt="pets" onClick={deleteFile} />
                  )}
                </BoxFieldImg2>
              </StyleContainer>
              <StyleContainer2>
                <Input
                  type="text"
                  name="location"
                  label="Location"
                  placeholder="Type of location"
                />
                <Input
                  type="number"
                  name="price"
                  label="Price"
                  placeholder="Type of price"
                />
                <FieldContainer>
                  <Input
                    as="textarea"
                    name="comments"
                    label="Comments"
                    placeholder="Type of pet"
                    $textarea
                  />
                </FieldContainer>
              </StyleContainer2>
            </ContentBox3>
          )}
          {(choosedCategory === 'lost/found' ||
            choosedCategory === 'in good hands') && (
            <ContentBox3>
              <StyleContainer>
                <TitleRadio>The Sex</TitleRadio>
                <DecorBox>
                  <RadioContainer>
                    <label htmlFor="1">
                      <Field type="radio" name="gender" value="Female" id="1" />
                      Female
                    </label>
                    <label htmlFor="2">
                      <Field type="radio" name="gender" value="Male" id="2" />
                      Male
                    </label>
                  </RadioContainer>
                  <ErrorMessage name="gender">
                    {msg => <ErrorText>{msg}</ErrorText>}
                  </ErrorMessage>
                </DecorBox>
                <BoxFieldImg2>
                  <ImitationLabel htmlFor="3" $sell>
                    Load the pet’s image:
                    <ErrorMessage name="imagesPets">
                      {msg => <ErrorText>{msg}</ErrorText>}
                    </ErrorMessage>
                  </ImitationLabel>
                  {!urlImg && (
                    <ButtonAddFile htmlFor="3">
                      <SvgIcon id={'icon-plus'} color={colors.blueColor} />
                    </ButtonAddFile>
                  )}
                  <InputImg
                    type="file"
                    name="imagesPets"
                    id="3"
                    accept="image/*"
                    onChange={addFile}
                  />
                  {urlImg && (
                    <ImgPets src={urlImg} alt="pets" onClick={deleteFile} />
                  )}
                </BoxFieldImg2>
              </StyleContainer>
              <StyleContainer2>
                <Input
                  type="text"
                  name="location"
                  label="Location"
                  placeholder="Type of location"
                />
                <FieldContainer>
                  <Input
                    as="textarea"
                    name="comments"
                    label="Comments"
                    placeholder="Type of pet"
                    $textarea
                  />
                </FieldContainer>
              </StyleContainer2>
            </ContentBox3>
          )}
          <ButtonBox>
            <Button type="submit" $primary>
              Done&nbsp;&nbsp;
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

// export default function AddMoreInfo() {
//   const { dataPets, writeFile } = useContext(FormContext);
//   const choosedCategory = dataPets.category;
//   const [urlImg, setUrlImg] = useState('');

//   const addFile = e => {
//     console.log(e.target.files[0]);

//     const file = e.target.files[0];
//     const objectURL = window.URL.createObjectURL(file);
//     setUrlImg(objectURL);
//     writeFile(file)

//     console.log('objectURL->', objectURL);
//   };

//   const deleteFile = () => {
//     setUrlImg('');
//   };

//   return (
//     <>
//       {choosedCategory === 'your pet' && (
//         <ContentBox2>
//           <BoxFieldImg>
//             <div>
//               <ImitationLabel>Load the pet’s image:</ImitationLabel>
//               <ErrorMessage name="imagesPets">
//                 {msg => <ErrorText $inputimg>{msg}</ErrorText>}
//               </ErrorMessage>
//             </div>
//             {!urlImg && (
//               <ButtonAddFile htmlFor="1">
//                 <SvgIcon id={'icon-plus'} color={colors.blueColor} />
//               </ButtonAddFile>
//             )}
//             <InputImg
//               type="file"
//               name="imagesPets"
//               id="1"
//               accept="image/*"
//               onChange={addFile}
//             />
//             {urlImg && <ImgPets src={urlImg} alt="pets" onClick={deleteFile} />}
//           </BoxFieldImg>
//           <Input
//             as="textarea"
//             name="comments"
//             label="Comments"
//             placeholder="Type of pet"
//             $textarea
//           />
//         </ContentBox2>
//       )}
//       {choosedCategory === 'sell' && (
//         <ContentBox3>
//           <StyleContainer>
//             <TitleRadio>The Sex</TitleRadio>
//             <DecorBox>
//               <RadioContainer>
//                 <label htmlFor="1">
//                   <Field type="radio" name="gender" value="Female" id="1" />
//                   Female
//                 </label>
//                 <label htmlFor="2">
//                   <Field type="radio" name="gender" value="Male" id="2" />
//                   Male
//                 </label>
//               </RadioContainer>
//               <ErrorMessage name="gender">
//                 {msg => <ErrorText>{msg}</ErrorText>}
//               </ErrorMessage>
//             </DecorBox>
//             <BoxFieldImg2>
//               <ImitationLabel  $sell>
//                 Load the pet’s image:
//                 <ErrorMessage name="imagesPets">
//                   {msg => <ErrorText>{msg}</ErrorText>}
//                 </ErrorMessage>
//               </ImitationLabel>
//               {!urlImg && (
//                 <ButtonAddFile htmlFor="3">
//                   <SvgIcon id={'icon-plus'} color={colors.blueColor} />
//                 </ButtonAddFile>
//               )}
//               <InputImg
//                 type="file"
//                 name="imagesPets"
//                 id="3"
//                 accept="image/*"
//                 onChange={addFile}
//               />
//               {urlImg && (
//                 <ImgPets src={urlImg} alt="pets" onClick={deleteFile} />
//               )}
//             </BoxFieldImg2>
//           </StyleContainer>
//           <StyleContainer2>
//             <Input
//               type="text"
//               name="location"
//               label="Location"
//               placeholder="Type of location"
//             />
//             <Input
//               type="number"
//               name="price"
//               label="Price"
//               placeholder="Type of price"
//             />
//             <FieldContainer>
//               <Label2 htmlFor="6">Comments</Label2>
//               <Input2
//                 as="textarea"
//                 name="comments"
//                 placeholder="Type of pet"
//                 id="6"
//                 $textarea
//               />
//             </FieldContainer>
//           </StyleContainer2>
//         </ContentBox3>
//       )}
//       {(choosedCategory === 'lost/found' ||
//         choosedCategory === 'in good hands') && (
//         <ContentBox3>
//           <StyleContainer>
//             <TitleRadio>The Sex</TitleRadio>
//             <DecorBox>
//               <RadioContainer>
//                 <label htmlFor="1">
//                   <Field type="radio" name="gender" value="Female" id="1" />
//                   Female
//                 </label>
//                 <label htmlFor="2">
//                   <Field type="radio" name="gender" value="Male" id="2" />
//                   Male
//                 </label>
//               </RadioContainer>
//               <ErrorMessage name="gender">
//                 {msg => <ErrorText>{msg}</ErrorText>}
//               </ErrorMessage>
//             </DecorBox>
//             <BoxFieldImg2>
//               <ImitationLabel htmlFor="3" $sell>
//                 Load the pet’s image:
//                 <ErrorMessage name="imagesPets">
//                   {msg => <ErrorText>{msg}</ErrorText>}
//                 </ErrorMessage>
//               </ImitationLabel>
//               {!urlImg && (
//                 <ButtonAddFile htmlFor="3">
//                   <SvgIcon id={'icon-plus'} color={colors.blueColor} />
//                 </ButtonAddFile>
//               )}
//               <InputImg
//                 type="file"
//                 name="imagesPets"
//                 id="3"
//                 accept="image/*"
//                 onChange={addFile}
//               />
//               {urlImg && (
//                 <ImgPets src={urlImg} alt="pets" onClick={deleteFile} />
//               )}
//             </BoxFieldImg2>
//           </StyleContainer>
//           <StyleContainer2>
//             <Input
//               type="text"
//               name="location"
//               label="Location"
//               placeholder="Type of location"
//             />
//             <FieldContainer>
//               <Label2 htmlFor="6">Comments</Label2>
//               <Input2
//                 as="textarea"
//                 name="comments"
//                 placeholder="Type of pet"
//                 id="6"
//                 $textarea
//               />
//             </FieldContainer>
//           </StyleContainer2>
//         </ContentBox3>
//       )}
//     </>
//   );
// }
