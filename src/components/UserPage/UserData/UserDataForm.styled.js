import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import ReactInputMask from 'react-input-mask';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 21px;

  @media screen and (min-width: 767px) {
    flex-direction: row-reverse;
    gap: 71px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    gap: 25px;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
`;

export const UserInfoContainer = styled.div`
  width: 264px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 767px) {
    width: 355px;
    gap: 10px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const StyledInput = styled(Field)`
  padding: 6px 12px;
  width: 190px;
  border: 1px solid #54ADFF;
  border-radius: 20px;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: #111111;
  &:disabled {
    background-color: inherit;
  }
  @media screen and (min-width: 767px) {
    width: 255px;
    padding: 4px 12px;
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const StyledInputMask = styled(ReactInputMask)`
  padding: 6px 12px;
  width: 190px;
  border: 1px solid #54ADFF;
  border-radius: 20px;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: #111111;
  &:disabled {
    background-color: inherit;
  }
  @media screen and (min-width: 767px) {
    width: 255px;
    padding: 4px 12px;
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const StyledLabel = styled.label`
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: #111111;
  @media screen and (min-width: 767px) {
    font-size: 18px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const UserAvatar = styled.img`
  height: 182px;
  width: 182px;
  object-fit: cover;
`;

export const UserAvatarThumb = styled.div`
  border-radius: 40px;
  width: 182px;
  margin: 0 auto 9px auto;
  overflow: hidden;
`;

export const ButtonEditPhoto = styled.button`
  margin: 0 auto;
  padding: 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: #111111;
  background-color: inherit;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  &:hover,
  &:focus {
    box-shadow: 7px 13px 14px 0px #74B1E83D;
    background-color: #CCE4FB;
  }
  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const ButtonUpload = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: inherit;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  &:hover,
  &:focus {
    box-shadow: 7px 13px 14px 0px #74B1E83D;
    background-color: #CCE4FB;
  }
`;

export const ButtonCancelUpload = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: inherit;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: box-shadow 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  &:hover,
  &:focus {
    box-shadow: 7px 13px 14px 0px #74B1E83D;
    background-color: #CCE4FB;
  }
`;

export const ContainerButtonsUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-bottom: 0px;
  gap: 5px;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  color: #111111;
  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const StyledErrorMessage = styled(ErrorMessage)`
  color: #F43F5E;
  font-size: 12px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const ErrorMessageContainer = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  max-width: 255px;
`;

export const StyledErrorImg = styled.p`
  color: #F43F5E;
  font-family: inherit;
  font-size: 12px;
  line-height: 1.83;
  letter-spacing: 0.04em;
  margin-top: 5px;
  text-align: center;
`;
