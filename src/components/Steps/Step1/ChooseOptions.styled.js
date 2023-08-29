import styled from 'styled-components';
import { devices } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';
import { Field} from 'formik';


export const ContentBox = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  padding: 8px 16px;
  border-radius: 40px;
  background-color: ${colors.lightBlueColor};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  color: ${colors.blueColor};
  transition: background-color 0.3s ease;
`;

export const Input = styled(Field)`
  position: absolute;
  left: -150%;
  background-color: ${colors.lightBlueColor};
  color: ${colors.blueColor};

  &:checked + ${Label} {
    background-color: ${colors.blueColor};
    color: ${colors.secondaryTextColor};
  }
`;