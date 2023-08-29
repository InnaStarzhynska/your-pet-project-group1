import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import {
  Wrapper,
  Title,
  FormContainer,
  ButtonBox,
  Button,
  ErrorText,
} from './AddPetPage.styled';
import ChooseOptions from 'components/Steps/Step1/ChooseOptions';
import AddDetails from 'components/Steps/Step2/AddDetails';
import AddMoreInfo from 'components/Steps/Step3/AddMoreInfo';
import Stepper from 'components/Stepper/Stepper';
import { addPet } from 'redux/operations/fetchUser';
import { addNotice } from 'redux/operations/fetchNotices';

export default function AddPetPage() {
  const dispatch = useDispatch();

  const [data, setData] = useState({
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
  const [activeStep, setActiveStep] = useState(0);

  const sendDataPets = data => {
    console.log('Submitted', data);

    const formData = new FormData();

    if (data.category === 'your pet') {
      formData.append('name', data.namePets);
      formData.append('dateOfBirth', data.dateOfBirth);
      formData.append('type', data.typePets);
      formData.append('petAvatar', data.imagesPets);
      formData.append('comments', data.comments);

      dispatch(addPet(formData));
      return;
    }

    if (data.category === 'sell') {
      formData.append('category', data.category);
      formData.append('name', data.namePets);
      formData.append('dateOfBirth', data.dateOfBirth);
      formData.append('type', data.typePets);
      formData.append('petAvatar', data.imagesPets);
      formData.append('comments', data.comments);
      formData.append('title', data.title);
      formData.append('sex', data.gender);
      formData.append('location', data.location);
      formData.append('price', data.price);

      dispatch(addNotice(formData));
      for (const pair of formData.entries()) {
        console.log(`${pair[0]}, ${pair[1]}`);
      }

      return;
    }
  };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      sendDataPets(newData);
      return;
    }

    setActiveStep(prevState => prevState + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));

    setActiveStep(prevState => prevState - 1);
  };

  const steps = [
    <ChooseOptions next={handleNextStep} data={data} />,
    <AddDetails next={handleNextStep} back={handlePrevStep} data={data} />,
    <AddMoreInfo next={handleNextStep} back={handlePrevStep} data={data} />,
  ];

  console.log(data);

  return (
    <Wrapper width={data.category} step={activeStep}>
      <Title step={activeStep} category={data.category}>
        {activeStep === 0
          ? 'Add pet'
          : data.category === 'your pet'
          ? 'Add pet'
          : data.category === 'sell'
          ? 'Add pet for sale'
          : data.category === 'lost/found'
          ? 'Add lost pet'
          : 'Add lost pet'}
      </Title>
      <Stepper currentStep={activeStep} />
      {steps[activeStep]}
    </Wrapper>
  );
}
