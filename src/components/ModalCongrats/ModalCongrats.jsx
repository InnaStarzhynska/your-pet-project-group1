import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import {
  Backdrop,
  Modal,
ButtonClose,
  Banner,
  Text,
  ApproveButton,
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
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <ButtonClose type="button" onClick={handleBackdropClick}>
          <SvgIcon id={'icon-cross-small'} />
        </ButtonClose>
        <Banner>Congrats!</Banner>
        <Text>Youre registration is success</Text>
        <ApproveButton type="button" onClick={handleBackdropClick}>
          Go to profile
          <SvgIcon id={'icon-pawprint-1'} color={"none"} />
        </ApproveButton>
      </Modal>
    </Backdrop>,
    modalApproveAction
  );
};

export default ModalCongrats;
