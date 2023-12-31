import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import { colors } from '../../constants/colors';
import { Form } from 'formik';

export const Wrapper = styled.div`
  width: 280px;
  padding: 20px 8px;
  margin: 0 auto;
  margin-top: 20px;
  background-color: #ffffff;
  border-radius: 40px;

  @media only screen and ${devices.tablet} {
    width: ${props =>
      props.width !== 'your pet' && props.step === 2 ? '704px' : '458px'};
    margin-top: 60px;
    padding: 20px 32px;
  }

  @media only screen and ${devices.desktop} {
    width: ${props =>
      props.width !== 'your pet' && props.step === 2 ? '822px' : '458px'};
    margin-top: 40px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  padding-left: 12px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.36;

  @media only screen and ${devices.tablet} {
    text-align: ${props =>
      props.step === 2 && props.category !== 'your pet' && 'center'};
    padding-left: 0px;
    font-size: 28px;
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const FormContainer = styled(Form)`
  min-height: 496px;
  padding: 20px 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and ${devices.tablet} {
    min-height: 542px;
    padding: 20px 32px;
  }

  @media only screen and ${devices.desktop} {
    padding: ${props => props.padding && '20px 73px'};
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: ${props =>
    props.$step1
      ? '91px'
      : props.$step2 && props.category === 'your pet'
      ? '44px'
      : '24px'};

  @media only screen and ${devices.tablet} {
    flex-direction: row-reverse;
    justify-content: ${props => (props.$step3 && props.category) !== 'your pet' && 'center'};
    margin-top: ${props =>
      props.$step1
        ? '137px'
        : props.$step2 && props.category === 'your pet'
        ? '40px'
        : props.$step2 && props.category !== 'your pet'
        ? '32px'
        : props.$step3 && props.category === 'your pet'
        ? '17px'
        : '60px'};
    gap: 24px;
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border: none;
  padding: ${props => (props.$primary ? '9px 0' : 0)};
  background-color: ${props =>
    props.$primary ? colors.blueColor : 'transparent'};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.36;
  color: ${props =>
    props.$primary ? colors.secondaryTextColor : colors.blueColor};

  @media only screen and ${devices.tablet} {
    width: ${props => props.$primary && '248px'};
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const ErrorText = styled.p`
  margin-top: 10px;
  color: ${colors.redErrorColor};
`;
