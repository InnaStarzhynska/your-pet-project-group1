import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 80px;
  position: relative;
  width: 280px;
  height: 425px;
  background-color: #fff;
  box-shadow: 7px 13px 14px rgba(116, 177, 232, 0.24);
  border-radius: 25px;

  @media (min-width: 768px) {
    width: 600px;
    height: 480px;
    border-radius: 50px;
  }
`;

export const Error = styled.div`
  margin-top: 4px;
  margin-left: 20px;
  width: 100%;
  font-size: 12px;
  font-family: Manrope, sans-serif;
  color: red;
`;

export const Correct = styled(Error)`
  color: green;
`;

export const LoginHeader = styled.h1`
  font-size: 24px;
  font-family: Manrope, sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
  margin-top: 40px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 36px;
    margin-top: 0;
  }
`;

export const InputWrapper = styled.div`
  max-width: 100%;
  width: 256px;
  height: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  @media (min-width: 768px) {
    width: 460px;
    padding-bottom: 15px;
    margin-bottom: 60px;
  }
`;

export const Input = styled(Field)`
  width: 100%;

  font-size: 16px;
  color: #888888;

  background-color: #fff;

  outline: none;
  border: none;
`;

export const WrapperInput = styled.div`
  display: flex;
  padding-left: 12px;
  padding-right: 12px;
  align-items: center;
  background-color: #fff;
  border: 1px solid #54adff;
  border-radius: 25px;
  height: 45px;

  &.default {
    border-color: #54adff;
  }
  &.success {
    border-color: #00c3ad;
  }
  &.error {
    border-color: #f43f5e;
  }

  @media (min-width: 768px) {
    border-radius: 25px;
  }
`;

export const Btn = styled.button`
  width: 256px;
  height: 50px;
  padding: 16px 32px;
  z-index: 10;
  margin-top: 170px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
  font-family: Manrope, sans-serif;
  color: #fff;
  background-color: #54adff;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 25px;
  transition: all 250ms ease-in-out;
  cursor: pointer;

  @media (min-width: 768px) {
    width: 460px;
    border-radius: 25px;
    font-size: 16px;
    margin-top: 100px;
  }
`;

export const Text = styled.p`
  margin-bottom: 20px;
  font-family: Manrope, sans-serif;
  font-size: 14px;
  color: #888888;
  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
`;
export const StyledLink = styled(Link)`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  text-decoration: underline;
  display: inline-block;
  color: #54adff;
`;

export const PassWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  &:first-child {
    margin-bottom: 32px;
  }
`;

export const ShowPassBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  width: 33px;
  height: 33px;
  background-color: transparent;
  outline: none;
  border: none;

  cursor: pointer;
`;

export const IconHidden = styled.svg`
  width: 24px;
  height: 24px;
`;

export const IconShown = styled.svg`
  width: 24px;
  height: 24px;
`;
export const CrossIcon = styled.span`
  width: 24px;
  height: 24px;
  position: relative;
  right: 18px;
  padding: 12px 0;
  background-color: #ffffff;
  border: none;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  cursor: pointer;
`;

export const IconCheck = styled.span`
  width: 24px;
  height: 24px;
`;

export const WrapperShowCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
