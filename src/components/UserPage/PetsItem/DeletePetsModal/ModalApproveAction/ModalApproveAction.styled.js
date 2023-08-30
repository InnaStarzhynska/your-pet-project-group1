import styled from 'styled-components';
import { colors } from 'constants/colors';
import { devices } from 'constants/breakpoints';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: rgba(43, 43, 43, 0.6);
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: 8px 20px;
  color: ${colors.blueColor};
  border-radius: 40px;
  border: 2px solid ${colors.blueColor};
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;
  background-color: transparent;

  @media screen and ${devices.tablet} {
    width: 129px;
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

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 280px;
  height: 302px;
  border-radius: 20px;
  background-color: ${colors.whiteColor};
  padding: 12px 12px 0;
  text-align: center;

  @media screen and ${devices.tablet} {
    width: 608px;
    height: 354px;
    padding: 24px 24px 0;
  }

  @media screen and ${devices.desktop} {
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

export const ButtonClose = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-color: transparent;
  background-color: transparent;
  margin-bottom: 41px;
  margin-left: auto;

  @media screen and ${devices.tablet} {
    margin-bottom: 60px;
  }
`;

export const Text = styled.p`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0.96px;

  @media screen and ${devices.tablet} {
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 1.44px;
  }
`;
