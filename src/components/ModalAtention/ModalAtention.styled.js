import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from 'constants/colors';
import { devices } from 'constants/breakpoints';

import {
  Backdrop,
  Modal,
  ButtonClose,
  Banner,
  WrapperButtons,
  Button,
  ApproveButton,
} from '../ModalApproveAction/ModalApproveAction.styled';

export const Background = styled(Backdrop)`
  z-index: 99;
`;

export const AtentionModal = styled(Modal)`
  height: 445px;
  padding: 16px 16px 0;

  @media screen and ${devices.tablet} {
    height: 429px;
    padding: 24px 24px 0;
  }
`;

export const BtnClose = styled(ButtonClose)`
  margin-bottom: 20px;

  @media screen and ${devices.tablet} {
    margin-bottom: 12px;
  }
`;

export const Attention = styled(Banner)`
  margin-bottom: 20px;

  @media screen and ${devices.tablet} {
    margin-bottom: 40px;
    font-size: 36px;
    letter-spacing: 1.44px;
  }
`;

export const Text = styled.p`
  width: 240px;
  margin: 0 auto;
  margin-bottom: 40px;
  color: ${colors.textColor};
  line-height: 18px;
  letter-spacing: 0.56px;

  @media screen and ${devices.tablet} {
    width: 528px;
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0.8px;
  }
`;

export const Buttons = styled(WrapperButtons)`
  margin-top: 0;
  gap: 12px;

  @media screen and ${devices.tablet} {
    gap: 20px;
  }
`;

export const BtnLogin = styled(ApproveButton)`
  padding: 8px 78px;
  border: 2px solid ${colors.accentColor};
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
  padding: 7px 69px;
  color: ${colors.accentColor};
  border-radius: 40px;
  border: 2px solid ${colors.accentColor};
  font-family: Manrope;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;
  background-color: transparent;

  @media screen and ${devices.tablet} {
    width: 142px;
    padding: 8px 20px;
  }
`;
