import styled from 'styled-components';
import { colors } from 'constants/colors';
import { devices } from 'constants/breakpoints';
import {
  Backdrop,
  Modal,
  ButtonClose,
  Head,
  ApproveButton,
} from '../../components/ModalApproveAction/ModalApproveAction.styled';

export const Background = styled(Backdrop)`
  background: rgba(87, 86, 86, 0.6);
  backdrop-filter: none;
`;

export const ModalContent = styled(Modal)`
  height: 287px;
  padding: 16px 16px 0;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and ${devices.tablet} {
    height: 354px;
    padding: 24px 24px 0;
  }
`;

export const BtnClose = styled(ButtonClose)`
  margin-bottom: 28px;

  @media screen and ${devices.tablet} {
    margin-bottom: 12px;
  }
`;

export const Congrats = styled(Head)`
  margin-bottom: 24px;

  @media screen and ${devices.tablet} {
    margin-bottom: 52px;
  }
`;

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

export const ToGoProfile = styled(ApproveButton)`
  width: 248px;
  @media screen and ${devices.tablet} {
    margin: 0 auto;
  }
`;
