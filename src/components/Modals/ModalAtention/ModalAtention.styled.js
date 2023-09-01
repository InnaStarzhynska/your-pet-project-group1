import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from 'constants/colors';
import { devices } from 'constants/breakpoints';

export const Background = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(97, 97, 97, 0.6);
  backdrop-filter: blur(4px)
  z-index: 99;
`;

export const AtentionModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 280px;
  height: 445px;
  padding: 16px 16px 0;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 12px 12px 0;
  text-align: center;

  @media screen and ${devices.tablet} {
    height: 429px;
    width: 608px;
    padding: 24px 24px 0;
  }
`;

export const BtnClose = styled.button`
  margin-bottom: 20px;
  display: flex;
  justify-content: right;
  align-items: center;
  border-color: transparent;
  background-color: transparent;
  padding: 0;
  margin-left: auto;

  @media screen and ${devices.tablet} {
    margin-bottom: 12px;
  }
`;

export const Attention = styled.h3`
  margin: 0 auto 20px;
  color: ${colors.blackColor};
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.96px;

  @media screen and ${devices.tablet} {
    margin-bottom: 40px;
    font-size: 36px;
    letter-spacing: 1.44px;
  }
`;

export const Text = styled.p`
  width: 240px;
  margin: 0 auto;
  font-weight: 500;
  margin-bottom: 40px;
  color: ${colors.textColor};
  letter-spacing: 0.54px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: 0.56px;

  @media screen and ${devices.tablet} {
    width: 528px;
    margin-bottom: 40px;
    font-size: 20px;
    letter-spacing: 0.8px;
    line-height: 28px;
  }
`;

export const Buttons = styled.div`
  margin-top: 0;
  gap: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and ${devices.tablet} {
    gap: 20px;
    flex-direction: row;
    margin-top: 48px;
  }
`;

export const BtnLogin = styled.button`
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  padding: 8px 78px;
  border-radius: 40px;
  border: transparent;
  color: ${colors.textButtonColor};
  background: ${colors.accentColor};

  @media screen and ${devices.tablet} {
    width: 165px;
    padding: 8px 20px;
  }
`;

export const BtnReg = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 69px;
  color: ${colors.accentColor};
  border-radius: 40px;
  border: 2px solid ${colors.accentColor};
  font-family: Manrope;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.64px;
  background-color: transparent;

  @media screen and ${devices.tablet} {
    width: 142px;
    padding: 8px 20px;
  }
`;
