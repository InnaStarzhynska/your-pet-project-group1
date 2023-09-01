import styled from 'styled-components';
import { colors } from 'constants/colors';
import { devices } from 'constants/breakpoints';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px);
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 280px;
//   height: 389px;
height: 320px;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 12px 12px 0;
  text-align: center;

  @media screen and ${devices.tablet} {
    width: 608px;
    height: 352px;
    padding: 24px 24px 0;
    border-radius: 40px;
  }
`;

export const ButtonClose = styled.button`
  display: flex;
  justify-content: right;
  align-items: center;
  border-color: transparent;
  background-color: transparent;
  padding: 0;
  margin-bottom: 24px;
  margin-left: auto;
  cursor: pointer; 

  @media screen and ${devices.tablet} {
    margin-bottom: 12px;
  }
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  margin-top: 44px;

  @media screen and ${devices.tablet} {
    flex-direction: row;
    gap: 17px;
    margin-top: 48px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  color: ${colors.blueColor};
  border-radius: 40px;
  border: 2px solid ${colors.blueColor};
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;
  cursor: pointer; 
  background-color: transparent;

  @media screen and ${devices.tablet} {
    width: 129px;
    height: 40px;
  }
`;

export const ApproveButton = styled(Button)`
  display: flex;
  gap: 8px;
  justify-content: center;
  border-color: transparent;
  color: ${colors.textButtonColor};
  background-color: ${colors.blueColor};
`;

export const Text = styled.p`
  // width: 240px;
  // margin: auto;
  color: ${colors.textColor};
  font-size: 24px;
  font-weight: 500;
  letter-spacing: -0.14px;

  @media screen and ${devices.tablet} {
    // width: 393px;
    color: ${colors.blackColor};
    font-size: 36px;
    letter-spacing: -0.16px;
    padding-top: 40px;
  }
`;