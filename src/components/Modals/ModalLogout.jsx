import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SvgIcon from '../SvgIcon/SvgIcon';
import { colors } from '../../constants/colors';
import { logOut } from '../../redux/operations/fetchUser';
import {
    Backdrop,
    Modal,
    ButtonClose,
    WrapperButtons,
    Button,
  ApproveButton,
} from './ModalLogout.styled';

const modalApproveAction = document.querySelector('#modal_approveAction');

const ModalLogout = ({ modalClose, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleEscape = e => {
      if (e.code === 'Escape') {
        modalClose();
      }
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [modalClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };

  const handleLogout = () => {
    dispatch(logOut());
    modalClose();
  };

  return createPortal(
        <Backdrop onClick={handleBackdropClick}>
          <Modal>
            <ButtonClose type="button" onClick={modalClose}>
              <SvgIcon id={'icon-cross-small'} />
            </ButtonClose>

            {children}

            <WrapperButtons>
              <Button type="button" onClick={modalClose}>
                Cancel
              </Button>

              <ApproveButton type="button" onClick={handleLogout}>
                <span>Yes</span>
                <SvgIcon
                  id={'icon-logout'}
                  color={colors.textButtonColor}
                ></SvgIcon>
              </ApproveButton>
            </WrapperButtons>
          </Modal>
        </Backdrop>,
    modalApproveAction
  );
};

export default ModalLogout;