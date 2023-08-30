import React from 'react';
import ChooseOptions from 'components/Steps/Step1/ChooseOptions';
import AddDetails from 'components/Steps/Step2/AddDetails';
import AddMoreInfo from 'components/Steps/Step3/AddMoreInfo';

export default function AddPetForm({ currentStep  }) {
  let stepContent;

  switch (currentStep) {
    case 1:
      stepContent = <ChooseOptions />;
      break;
    case 2:
      stepContent = <AddDetails />;
      break;
    case 3:
      stepContent = <AddMoreInfo />;
      break;
    default:
      break;
  }

  return <>{stepContent}</>;
}