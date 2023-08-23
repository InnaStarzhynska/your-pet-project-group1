import { Field } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 40px 12px;
  gap: 16px;
  background-color: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

  border-radius: 20px;

  @media screen and (min-width: 480px) {
    max-width: 480px;
    border-radius: 40px;
  }

  @media screen and (min-width: 768px) {
    max-width: 608px;
    padding: 60px 75px;
    border-radius: 40px;
    gap: 52px;
  }

  @media screen and (min-width: 1280px) {
    gap: 28px;
  }
`;

export const Title = styled.h2`
  box-sizing: border-box;
  font-weight: 500;
  font-size: 24px;
  line-height: 1.38;
  color: #111111;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
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
  margin-bottom: 24px;
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
  color: #888888;
`;
export const ErrorWrap = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  padding-left: 12px;
  align-items: center;
  justify-content: left;
  height: 24px;
  color: #f43f5e;
  font-size: 14px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    height: 32px;
  }
`;
export const Button = styled.button`
  width: 100%;
  gap: 8px;
  padding: 11px 0;
  margin-bottom: 24px;
  color: #ffffff;
  background-color: #54adff;
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
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  }
`;

export const Text = styled.p`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  text-align: center;
  color: #888888;
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  line-height: 1.33;
  letter-spacing: 0.04em;
  text-decoration: underline;
  display: inline-block;
  color: #54adff;
`;
export const IconBtn = styled.button`
  width: 70px;
  height: 48px;
  position: absolute;
  right: 0;
  background-color: #ffffff;
  border: none;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  cursor: pointer;
`;

export const CrossIcon = styled.button`
  width: 40px;
  height: 25px;
  position: absolute;
  top: 8px;
  right: 10px;
  background-color: #ffffff;
  border: none;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  cursor: pointer;
`;
export const ConfirmIcon = styled.button`
  width: 40px;
  height: 25px;
  position: absolute;
  top: 8px;
  right: 10px;
  background-color: #ffffff;
  border: none;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
`;

export const ConfirmMessage = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: left;
  height: 24px;
  font-size: 12px;
  color: #00c3ad;
  padding-left: 12px;
  font-size: 14px;
  font-weight: 400;
  @media screen and (min-width: 768px) {
    height: 32px;
  }
`;
