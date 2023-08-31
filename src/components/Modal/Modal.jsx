
import { useEffect } from 'react';
import { BackDrop, Content } from './Modal.styled';


const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handlePressESC = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handlePressESC);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handlePressESC);
    };
  }, [closeModal]);

  const handleBackDropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <BackDrop onClick={handleBackDropClick}>
      <Content>{children}</Content>
    </BackDrop>
  );
};

export default Modal;
