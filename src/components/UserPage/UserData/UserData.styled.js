import styled from 'styled-components';

export const StyledFormContainer = styled.div``;

export const ButtonEditUserInfo = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 6px;
  right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background-color: inherit;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);
  &:hover,
  &:focus {
    box-shadow: 7px 13px 14px 0px #74b1e83d;
    background-color: #cce4fb;
  }
  @media screen and (min-width: 767px) {
    top: 10px;
    right: 10px;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const StyledUserDataForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 59px;

  @media screen and (min-width: 767px) {
    flex-direction: row-reverse;
    gap: 71px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    gap: 63px;
  }
`;

export const StyledUserDataInput = styled.div`
  padding: 6px 12px;
  width: 190px;
  border: 1px solid #cce4fb;
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

export const StyledUserDataLabel = styled.p`
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

export const AvatarUserDataContainer = styled.div`
  position: relative;
`;

export const UserAvatarUserDataThumb = styled.div`
  border-radius: 40px;
  width: 182px;
  margin: 0 auto 9px auto;
  overflow: hidden;
`;

// export const UserAvatarUserData = styled.img`
//   height: 182px;
//   width: 182px;
//   object-fit: cover;
// `;

export const Avatar = styled.img`
  width: 182px;
  height: 182px;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: 0;
  border-radius: 40px;
`;

export const ModalWrapper = styled.div`
  width: 280px;
  padding: 20px 8px 20px 8px;
  @media screen and (min-width: 767px) {
    width: 704px;
    padding: 20px 76px 16px 20px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    padding: 20px 24px 20px 16px;
  }
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
