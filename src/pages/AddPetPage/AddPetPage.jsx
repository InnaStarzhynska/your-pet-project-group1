import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import {
  Wrapper,
  Title,
} from './AddPetPage.styled';

import ChooseOptions from 'components/Steps/Step1/ChooseOptions';
import AddDetails from 'components/Steps/Step2/AddDetails';
import AddMoreInfo from 'components/Steps/Step3/AddMoreInfo';
import Stepper from 'components/Stepper/Stepper';
import { addPet } from 'redux/operations/fetchUser';
import { addNotice } from 'redux/operations/fetchNotices';

export default function AddPetPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const sendDataPets = ( data ) => {
    const formData = new FormData();

    if (data.category === 'your pet') {
      formData.append('name', data.namePets);
      formData.append('dateOfBirth', data.dateOfBirth);
      formData.append('type', data.typePets);
      formData.append('petAvatar', data.imagesPets);
      formData.append('comments', data.comments);

      dispatch(addPet(formData)).then(response => {
        if (!response.error) {
          navigate('/user');
          return;
        }
      });
      return;
    }

    if (data.category !== 'your pet') {
      let formattedCategory = 'sell';
      console.log(formattedCategory);

      if (data.category === 'lost/found') {
        formattedCategory = 'lost-found'
      }

      if (data.category === "in good hands") {
        formattedCategory = "in-good-hands"
      }

      formData.append('category', formattedCategory);
      formData.append('name', data.namePets);
      formData.append('dateOfBirth', data.dateOfBirth);
      formData.append('type', data.typePets);
      formData.append('petAvatar', data.imagesPets);
      formData.append('comments', data.comments);
      formData.append('title', data.title);
      formData.append('sex', data.gender);
      formData.append('location', data.location);

      if (formattedCategory === 'sell') {
        console.log("if->", formattedCategory);
        formData.append('price', data.price);
      }
      


      dispatch(addNotice(formData)).then(response => {
        if (!response.error) {
          navigate(`/notices/${formattedCategory}`);
          return;
        }
      });
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
