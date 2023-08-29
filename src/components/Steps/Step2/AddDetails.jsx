import React, { useContext } from 'react';
import { FormContext } from '../../../pages/AddPetPage/AddPetPage';
import { useField } from 'formik';
import {
  ContentBox2,
  FieldContainer,
  Label2,
  Input2,
  ErrorText,
} from './AddDetails.styled';

const Input = ({ label, ...props }) => {
  const [field, meta,] = useField(props);
  return (
    <FieldContainer>
      <Label2>
        {label}
      </Label2>
      <Input2 {...field} {...props} isError={meta.error}/>
      {meta.touched && meta.error ? (
        <ErrorText className="error">{meta.error}</ErrorText>
      ) : null}
    </FieldContainer>
  );
};

export default function AddDetails() {
  const { dataPets } = useContext(FormContext);
  const choosedCategory = dataPets.category;


  return (
    <>
      {choosedCategory === 'your pet' && (
        <ContentBox2>
          <Input type="text" name="namePets" label="Pet’s name" placeholder="Type name pet"/>
          <Input type="date" name="dateOfBirth" label="Date of birth" placeholder="Type date of birth"/>
          <Input type="text" name="typePets" label="Type" placeholder="Type of pet"/>
        </ContentBox2>
      )}
      {choosedCategory !== 'your pet' && (
        <ContentBox2>
          <Input type="text" name="title" label="Pet’s name" placeholder="Title of add"/>
          <Input type="text" name="namePets" label="Pet’s name" placeholder="Type name pet"/>
          <Input type="date" name="dateOfBirth" label="Date of birth" placeholder="Type date of birth"/>
          <Input type="text" name="typePets" label="Type" placeholder="Type of pet"/>
        </ContentBox2>
      )}
    </>
  );
}

