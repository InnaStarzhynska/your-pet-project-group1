import styled from 'styled-components';
import { devices } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';
import { Field } from 'formik';

export const ContentBox2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FieldContainer = styled.div`
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  @media only screen and ${devices.tablet} {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const Label2 = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  color: ${colors.textColor};

  @media only screen and ${devices.tablet} {
    margin-bottom: 8px;
    font-size: 20px;
    line-height: 1.32;
  }
`;

export const Input2 = styled(Field)`
  height: ${props => props.$textarea && '92px'};
  width: 100%;
  padding: 8px 16px;
  font-size: 14px;
  border-radius: ${props => (props.$textarea ? '20px' : '40px')};
  border: 1px solid ${props =>
    props.error ? colors.redErrorColor : colors.blueColor};

  ::placeholder {
    font-size: 14px;
    line-height: 1.5;
    color: #888888;
  }

  @media only screen and ${devices.tablet} {
    height: ${props => props.$textarea && '79px'};
    padding: 12px 16px;
    font-size: 16px;

    ::placeholder {
      font-size: 16px;
    }
`;

export const ErrorText = styled.p`
  margin-top: 4px;
  color: ${colors.redErrorColor};
`;
