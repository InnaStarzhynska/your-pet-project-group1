import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import {
  Background,
  ModalContent,
  BtnClose,
  Congrats,
  Text,
  ToGoProfile,
} from './ModalCongrats.styled';

const modalApproveAction = document.querySelector('#modal_approveAction');

const ModalCongrats = ({ closeModal }) => {
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
    closeModal();
  };

  return createPortal(
    <Background onClick={handleBackdropClick}>
      <ModalContent>
        <BtnClose type="button" onClick={handleBackdropClick}>
          <SvgIcon id={'icon-cross-small'} />
        </BtnClose>
        <Congrats>Congrats!</Congrats>
        <Text>Youre registration is success</Text>
        <ToGoProfile type="button" onClick={handleBackdropClick}>
          Go to profile
          <SvgIcon id={'icon-pawprint-1'} />
        </ToGoProfile>
      </ModalContent>
    </Background>,
    modalApproveAction
  );
};

export default ModalCongrats;
