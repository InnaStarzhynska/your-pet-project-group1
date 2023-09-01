import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import { colors } from 'constants/colors';


export const ModalNoticeBox = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 280px;
  max-height: 600px;
  border-radius: 20px;
  padding: 44px 20px 16px 20px;
  overflow: auto;
  background: ${colors.whiteBgColor};

  @media only screen and ${devices.tablet} {
    width: 681px;
    height: 540px;
    padding: 32px 32px 24px 32px;
    border-radius: 40px;
  }
`;

export const ModalNoticeWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 12px;

  @media screen and (${devices.tablet}) {
    flex-direction: row;
    gap: 24px;
    margin-bottom: 28px;
  }
`;

export const ImageContainer = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;
  background: lightgray 0px -14.355px / 100% 150.131% no-repeat;

  @media screen and (${devices.tablet}) {
    width: 262px;
    height: 298px;
    border-radius: 0px 0px 40px 40px;
    background: lightgray 0px -4.16px / 100% 131.822% no-repeat;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0px 0px 40px 40px;
`;

export const Category = styled.p`
  position: absolute;
  top: 44px;
  left: 31px;
  width: 126px;
  height: 32px;
  padding: 11px 17px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 0px 16px 16px 0px;
  background: ${colors.lightBlueColor};

  color: ${colors.textColor};
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 23px;
  right: 26px;
  background-color: transparent;
  border: transparent;
  stroke: ${colors.blueColor};
  cursor: pointer;

  width: 24px;
  height: 24px;
  padding: 0;

  @media (max-width: 767px) {
    top: 12px;
    right: 12px;
  }

  :hover,
  :focus {
    stroke: rgb(255, 193, 7);
  }
`;

export const Title = styled.h1`
  width: 321px;
  margin-bottom: 20px;

  color: ${colors.blackColor};

  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.28px;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 24px;
    letter-spacing: -0.24px;
    margin-bottom: 20px;
  }
`;

export const ModalNoticeInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModelItemInfo = styled.li`
  display: flex;
  gap: 70px;

  @media (max-width: 767px) {
    width: 100%;
    gap: 20px;
  }
`;

export const Key = styled.p`
  width: 70px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${colors.blackColor};

  @media only screen and ${devices.tablet} {
    font-size: 16px;
  }
`;
export const Value = styled(Key)`
  font-size: 12px;
  font-weight: 500;

  @media only screen and ${devices.tablet} {
    font-size: 16px;
  }
`;

export const AddressLink = styled.a`
  color: ${colors.accentColor};

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;

  :hover,
  :focus {
    color: rgb(84, 173, 255);
  }

  @media only screen and ${devices.tablet} {
    font-size: 16px;
  }
`;

export const Comments = styled.p`
  margin-bottom: 70px;

  color: ${colors.blackColor};

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.64px;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 14px;
    letter-spacing: 0.56px;
    margin-bottom: 12px;
  }
`;

export const CommentsBold = styled.span`
  color: ${colors.blackColor};

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.64px;

  @media (max-width: 767px) {
    width: 100%;
    font-size: 14px;
    letter-spacing: 0.56px;
  }
`;

export const AddBtn = styled.button`
  display: flex;
  height: 40px;
  padding: 8px 22px;
  margin-top: 8px;
  border-radius: 40px;
  background: ${colors.blueColor};
  border: 2px solid #54adff;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: ${colors.textButtonColor};

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  // letter-spacing: 0.64px;

  &:hover,
  &:focus {
    border: none;
    color: ${colors.whiteBgColor};
    background: linear-gradient(315deg, #419ef1 0%, #9bd0ff 100%);
  }

  @media (max-width: 767px) {
    width: 100%;
  }

  @media only screen and ${devices.tablet} {
    position: absolute;
    right: 177px;
    bottom: 24px;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  width: 100%;
  height: auto;
  padding: 8px 20px;
  border-radius: 40px;
  border: 2px solid ${colors.blueColor};
  margin-bottom: 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 0;
  color: ${colors.blueColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;

  &:hover,
  &:focus {
    background-image: ${colors.gradientBlueColor};
    color: ${colors.whiteColor};
    border: none;
  }

  @media only screen and ${devices.tablet} {
    position: absolute;
    right: 31px;
    bottom: 24px;
    width: 129px;
    height: 40px;
  }
`;
