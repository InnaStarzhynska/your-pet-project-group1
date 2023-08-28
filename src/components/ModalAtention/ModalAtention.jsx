import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { colors } from 'constants/colors';

import {
  Background,
  AtentionModal,
  BtnClose,
  Attention,
  Text,
  Buttons,
  BtnLogin,
  BtnReg,
} from './ModalAtention.styled';

const modalApproveAction = document.querySelector('#modal_approveAction');

const ModalAtention = ({ toggleModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        handleClickClose();
      }
    });
  });

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      handleClickClose();
    }
  };

  const handleClickClose = () => {
    toggleModal();
  };

  return createPortal(
    <Background onClick={handleBackdropClick}>
      <AtentionModal>
        <BtnClose>
          <SvgIcon type="button" id={'icon-cross-small'} />
        </BtnClose>
        <Attention>Attention</Attention>
        <Text>
          We would like to remind you that certain functionality is available
          only to authorized users.If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </Text>
        <Buttons>
          <BtnLogin>
            Log IN
            <SvgIcon
              type="button"
              id={'icon-pawprint-1'}
              color={colors.accentColor}
            />
          </BtnLogin>
          <BtnReg type="button" to="/register">
            Registration
          </BtnReg>
        </Buttons>
      </AtentionModal>
    </Background>,
    modalApproveAction
  );
};

export default ModalAtention;
