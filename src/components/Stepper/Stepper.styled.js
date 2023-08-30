import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import { colors } from '../../constants/colors';

export const StepperBox = styled.div`
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  gap: 12px;

  @media only screen and ${devices.tablet} {
    gap: 16px;
  }
`;

export const BoxStep = styled.div`
  width: 80px;

  @media only screen and ${devices.tablet} {
    width: 120px;
  }
`;

export const NameStep = styled.p`
  margin-bottom: 12px;
  font-weight: 500;
  font-size: 10px;
  line-height: 1.36;
  color: ${props => props.$activeStep ? colors.blueColor : (props.$successStep ? colors.greenStepSuccessColor : " #888888")};

  @media only screen and ${devices.tablet} {
    line-height: 1.65;
    font-size: 16px;
  }
`;

export const MarkStep = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 8px;
  background-color: ${props => props.$activeStep ? colors.blueColor : (props.$successStep ? colors.greenStepSuccessColor : colors.lightBlueColor)};
`;
