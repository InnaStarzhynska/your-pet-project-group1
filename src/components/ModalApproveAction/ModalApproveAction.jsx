import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import SvgIcon from 'components/SvgIcon/SvgIcon';
import { colors } from 'constants/colors';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations/fetchUser';
import {
  ApproveButton,
  Backdrop,
  Button,
  ButtonClose,
  Modal,
  WrapperButtons,
  Banner,
  Text,
  TextSpan,
  Background,
  ModalNone,
  BtnClose,
  Head,
} from './ModalApproveAction.styled';

const modalApproveAction = document.querySelector('#modal_approveAction');

const ModalApproveAction = ({ toggleModal, children }) => {
  const dispatch = useDispatch();

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

  const handleLogout = () => {
    dispatch(logOut());
    toggleModal();
  };

  return createPortal (
    <>
      {children && (
        <Backdrop onClick={handleBackdropClick}>
          <Modal>
            <ButtonClose type="button" onClick={handleClickClose}>
              <SvgIcon id={'icon-cross-small'} />
            </ButtonClose>

            <Banner>Delete adverstiment?</Banner>

            <Text>
              Are you sure you want to delete <TextSpan>“{children}”?</TextSpan>
              You can`t undo this action.
            </Text>

            <WrapperButtons>
              <Button type="button" onClick={handleClickClose}>
                Cancel
              </Button>

              <ApproveButton type="button" onClick={handleLogout}>
                <span>Yes</span>
                <SvgIcon
                  id={'icon-trash-2'}
                  color={colors.textButtonColor}
                ></SvgIcon>
              </ApproveButton>
            </WrapperButtons>
          </Modal>
        </Backdrop>
      )}
      {!children && (
        <Background onClick={handleBackdropClick}>
          <ModalNone>
            <BtnClose type="button" onClick={handleClickClose}>
              <SvgIcon id={'icon-cross-small'} />
            </BtnClose>

            <Head>Already leaving?</Head>

            <WrapperButtons>
              <Button type="button" onClick={handleClickClose}>
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
          </ModalNone>
        </Background>
      )}
    </>, modalApproveAction
  );
};

export default ModalApproveAction;
