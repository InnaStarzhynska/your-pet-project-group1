import { Field } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import { colors } from 'constants/colors';

export const FormContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 12px;
  gap: 26px;
  background-color: ${colors.whiteBgColor};
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

  border-radius: 20px;

  @media screen and (${devices.mobile}) {
    max-width: 480px;
    border-radius: 40px;
  }

  @media screen and (${devices.tablet}) {
    max-width: 608px;
    padding: 60px 75px;
    border-radius: 40px;
    gap: 22px;
  }

  @media screen and (${devices.desktop}) {
    gap: 8px;
  }
`;

export const Title = styled.h2`
  box-sizing: border-box;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.38;
  color: ${colors.textColor};
  margin-bottom: 20px;

  @media screen and (${devices.tablet}) {
    margin-bottom: 40px;
    font-size: 36px;
    letter: 4%;
    font-weight: 500;
  }
`;
export const InputContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin-bottom: 24px; */
`;
export const InputWrap = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  
`;

export const BtnContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  width: 100%;
  outline: 1px solid #54adff;
  border: none;
  border-radius: 40px;
  padding: 12px 42px 12px 16px;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: ${colors.inputTextColor};
  &.default {
    outline: 1px solid ${colors.blueColor};
  }
  &.success {
    outline: 1px solid ${colors.greenStepSuccessColor};
  }
  &.error {
    outline: 1px solid ${colors.redErrorColor};
  }

`;
export const ErrorWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding-left: 12px;
  align-items: center;
  justify-content: left;
  height: 14px;
  color: ${colors.redErrorColor};
  font-size: 12px;
  font-weight: 400;

  @media screen and (${devices.tablet}) {
    height: 32px;
  }
`;
export const Button = styled.button`
  width: 100%;
  padding: 11px 0;
  margin-bottom: 8px;
  color: ${colors.whiteBgColor};
  background-color: ${colors.blueColor};
  border-radius: 40px;
  border: none;
  outline: none;
  font-family: inherit;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;
  letter-spacing: 0.04em;
  cursor: pointer;

  &:hover {
    background: ${colors.gradientBlueColor};
  }

  

  @media screen and (${devices.tablet}) {
    margin-bottom: 16px;
  }
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  text-align: center;
  color: ${colors.inputTextColor};
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  text-decoration: underline;
  display: inline-block;
  color: ${colors.blueColor};
`;
export const IconBtn = styled.button`
  width: 40px;
  height: 48px;
  position: absolute;
  right: 12px;
  padding: 12px 0; 
  background-color: ${colors.whiteBgColor};
  border: none;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  cursor: pointer;
`;

export const CrossIcon = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 18px;
 padding: 12px 0;
  background-color: ${colors.whiteBgColor};
  border: none;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  cursor: pointer;
`;
export const ConfirmIcon = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 18px;
 padding: 12px 0;
  background-color: ${colors.whiteBgColor};
  border: none;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const ConfirmMessage = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  height: 14px;
  font-size: 12px;
  color: ${colors.greenStepSuccessColor};
  padding-left: 12px;
  font-size: 12px;
  font-weight: 400;
  @media screen and (${devices.tablet}) {
    height: 32px;
  }
`;

export const PasswordComnfirIcon = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 60px;
 padding: 12px 0;
  background-color: ${colors.whiteBgColor};
  border: none;
 
`;
export const PasswordCrossIcon = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 60px;
 padding: 12px 0;
  background-color: ${colors.whiteBgColor};
  border: none;
 
`;

