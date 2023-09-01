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
    const originalOverflowStyle = {
      html: document.documentElement.style.overflow,
      body: document.body.style.overflow,
    };

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.documentElement.style.overflow = originalOverflowStyle.html;
      document.body.style.overflow = originalOverflowStyle.body;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <ButtonClose type="button" onClick={closeModal}>
          <SvgIcon id={'icon-cross-small'} />
        </ButtonClose>
        <Banner>Congrats!</Banner>
        <Text>Your registration is successful</Text>
        <ApproveButton type="button" onClick={handleBackdropClick}>
          Go to profile
          <SvgIcon id={'icon-pawprint-1'} color={'none'} />
        </ApproveButton>
      </Modal>
    </Backdrop>,
    modalApproveAction
  );
};

export default ModalCongrats;
