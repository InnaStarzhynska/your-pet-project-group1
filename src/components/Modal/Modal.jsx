

// export default function Modal() {
//   return (
//     <div>Modal</div>
//   )
// }

import { useEffect } from 'react';
import { BackDrop, Button, Content } from './Modal.styled';
// import { createPortal } from 'react-dom';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { colors } from 'constants/colors';

const modalWindow = document.getElementById('modal');

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
      <Content>
        {children}
        {/* <Button onClick={closeModal}>
        
             <SvgIcon
                      id={'icon-cross-small'}
                      color={colors.blueColor}
          />
       
        </Button> */}
      </Content>
    </BackDrop>
  );
};

export default Modal;