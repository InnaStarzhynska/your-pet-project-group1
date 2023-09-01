import { useEffect } from 'react';
import { BackDrop, Content } from './Modal.styled';

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    const originalOverflowStyle = {
      html: document.documentElement.style.overflow,
      body: document.body.style.overflow,
    };

    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    const handlePressESC = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handlePressESC);

    return () => {
      document.documentElement.style.overflow = originalOverflowStyle.html;
      document.body.style.overflow = originalOverflowStyle.body;
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
