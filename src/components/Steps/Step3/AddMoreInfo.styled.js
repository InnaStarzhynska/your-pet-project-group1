import styled from 'styled-components';
import { devices } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';
import { Field } from 'formik';
import { ContentBox2, Label2, Input2 } from '../Step2/AddDetails.styled';

export const ContentBox3 = styled(ContentBox2)`
  @media only screen and ${devices.tablet} {
    flex-direction: row;
    gap: 45px;
  }

  @media only screen and ${devices.desktop} {
    gap: 79px;
  }
`;

export const BoxFieldImg = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 24px;

  @media only screen and ${devices.tablet} {
    gap: 16px;
  }
`;

export const StyleContainer = styled.div`
  margin-bottom: 16px;

  @media only screen and ${devices.tablet} {
    margin-bottom: 0;
  }
`;

export const StyleContainer2 = styled.div`
  width: 100%;
`;

export const DecorBox = styled.div`
  margin-bottom: 16px;

  @media only screen and ${devices.tablet} {
    margin-bottom: 48px;
  }
`;

export const RadioContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const LabelRadio = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 6px 16px;
  border-radius: 40px;
  background-color: ${props => props.checked ? colors.blueColor : 'transparent'};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${props => props.checked ? colors.textButtonColor : "#888888"};
  transition: background-color 0.3s ease;
`;

export const InputRadio = styled(Field)`
  position: absolute;
  left: -150%;
`;

export const BoxFieldImg2 = styled(BoxFieldImg)`
  margin-bottom: 0;

  @media only screen and ${devices.tablet} {
    flex-direction: column;
    gap: 8px;
  }

  @media only screen and ${devices.desktop} {
    gap: 12px;
  }
`;

export const Label3 = styled(Label2)`
  width: 81px;
  margin-bottom: 0px;

  @media only screen and ${devices.tablet} {
    width: 114px;
  }
`;

export const LabelImgSell = styled.p`
  @media only screen and ${devices.tablet} {
    width: 200px;
  }
`;

export const InputImg = styled(Field)`
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
`;

export const ButtonAddFile = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 112px;
  height: 112px;
  border: none;
  border-radius: 20px;
  background-color: ${colors.lightBlueColor};

  @media only screen and ${devices.tablet} {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;

export const ImitationLabel = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  width: 81px;
  margin-bottom: 0px;

  @media only screen and ${devices.tablet} {
    width: ${props => (props.$sell ? '200px' : '114px')};
    font-size: 20px;
    line-height: 1.32;
  }
`;

export const ImgPets = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 20px;

  @media only screen and ${devices.tablet} {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;

export const Input3 = styled(Input2)`
  height: ${props => props.$textarea && '92px'};

  @media only screen and ${devices.tablet} {
    height: ${props => props.$textarea && '182px'};
  }
`;

export const TitleRadio = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  color: ${colors.textColor};

  @media only screen and ${devices.tablet} {
    font-size: 20px;
    line-height: 1.32;
  }
`;

export const ErrorText = styled.p`
  margin-top: ${props => (props.$inputimg ? '7px' : '4px')};
  color: ${colors.redErrorColor};
`;
