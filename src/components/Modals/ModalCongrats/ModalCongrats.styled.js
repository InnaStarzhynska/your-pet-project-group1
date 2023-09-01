import styled from 'styled-components';
import { colors } from 'constants/colors';
import { devices } from 'constants/breakpoints';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(87, 86, 86, 0.6);
  backdrop-filter: none;
`;

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  width: 280px;
 height: 287px;
  border-radius: 20px;
  background-color: #ffffff;
  padding: 16px 16px 0;
  text-align: center;

  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and ${devices.tablet} {
    width: 608px;
    border-radius: 40px;
    height: 354px;
    padding: 24px 24px 0;
  }
  }
`;

export const ButtonClose = styled.button`
  display: flex;
  justify-content: right;
  align-items: center;
  border-color: transparent;
  background-color: transparent;
  padding: 0;
  margin-left: auto;
  margin-bottom: 28px;

  @media screen and ${devices.tablet} {
    margin-bottom: 12px;
  }`

export const Banner = styled.h3`
  margin: auto;
 margin-bottom: 24px;
  color: ${colors.textColor};
  font-size: 24px;
    font-weight: 500;
  letter-spacing: 0.96px;

  @media screen and ${devices.tablet} {
   margin-bottom: 52px;
    color: ${colors.blackColor};
     font-size: 36px;
    letter-spacing: 1.44px;
  }
`

export const Text = styled.p`
  margin-bottom: 40px;
  color: ${colors.textColor};
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.64px;

  @media screen and ${devices.tablet} {
    margin-bottom: 60px;
    font-size: 24px;
    letter-spacing: 0.96px;
  }
`;

export const ApproveButton = styled.button`
  display: flex;
  gap: 8px;
  padding: 8px 20px;
  width: 248px;
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  color: ${colors.textButtonColor};
  background-color: ${colors.blueColor};
  border: 2px solid ${colors.blueColor};
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;

  @media screen and ${devices.tablet} {
    margin: 0 auto;
  }
`;

