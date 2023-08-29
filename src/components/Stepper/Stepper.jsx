import React from 'react';
import { StepperBox, NameStep, MarkStep, BoxStep } from './Stepper.styled';

export default function Stepper({ currentStep }) {

  const steps = [
    { step: 1, label: 'Choose  option' },
    { step: 2, label: 'Personal details' },
    { step: 3, label: 'More info' },
  ];
  
 

  const addStyle = step => {
    if (currentStep === step.step) {
      return (
        <BoxStep>
          <NameStep $activeStep>{step.label}</NameStep>
          <MarkStep $activeStep></MarkStep>
        </BoxStep>
      );
    } else if (currentStep > step.step) {
      return (
        <BoxStep>
          <NameStep $successStep>{step.label}</NameStep>
          <MarkStep $successStep></MarkStep>
        </BoxStep>
      );
    }

    return (
      <BoxStep>
        <NameStep>{step.label}</NameStep>
        <MarkStep></MarkStep>
      </BoxStep>
    );
  };


  return <StepperBox>{steps.map(step => addStyle(step))}</StepperBox>;
}

  