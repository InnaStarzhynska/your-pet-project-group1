import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';

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
    const originalOverflowStyle = {
      html: document.documentElement.style.overflow,
      body: document.body.style.overflow,
    };

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.documentElement.style.overflow = originalOverflowStyle.html;
      document.body.style.overflow = originalOverflowStyle.body;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModal]);

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
        <BtnClose onClick={handleClickClose}>
          <SvgIcon type="button" id={'icon-cross-small'} />
        </BtnClose>
        <Attention>Attention</Attention>
        <Text>
          We would like to remind you that certain functionality is available
          only to authorized users. If you have an account, please log in with
          your credentials. If you do not already have an account, you must
          register to access these features.
        </Text>
        <Buttons>
          <BtnLogin>
            Log IN
            <SvgIcon type="button" id={'icon-pawprint-1'} color={'none'} />
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
