import styled from 'styled-components';

export const PetsCard = styled.li`
  position: relative;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 16px 20px 16px 20px;
  border-radius: 40px;
  background-color: #ffffff;
  box-shadow: 3px 8px 14px 0px #88C6FD30;
  @media screen and (min-width: 767px) {
    padding: 20px;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    gap: 32px;
  }
`;

export const PetsImg = styled.img`
  height: 240px;
  width: 240px;
  object-fit: cover;
  border-radius: 20px;
  @media screen and (min-width: 767px) {
    height: 128px;
    width: 128px;
    flex-direction: row;
  }
  @media screen and (min-width: 1280px) {
    height: 161px;
    width: 161px;
    border-radius: 40px;
  }
`;

export const PetsInfoContainer = styled.div`
  max-width: 240px;
  @media screen and (min-width: 767px) {
    max-width: 515px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 580px;
  }
`;

export const PetsInfoTitle = styled.span`
  font-weight: 600;
`;

export const PetsInfoText = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: 0.04em;
  word-wrap: break-word;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
  @media screen and (min-width: 767px) {
    word-wrap: break-word;
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.4;
    word-wrap: break-word;
  }
`;

export const ButtonDeletePet = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 264px;
  right: 8px;
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
    box-shadow: 7px 13px 14px 0px #74B1E83D;
    background-color: #CCE4FB;
  }
  @media screen and (min-width: 767px) {
    top: 12px;
    right: 12px;
  }
  @media screen and (min-width: 1280px) {
  }
`;