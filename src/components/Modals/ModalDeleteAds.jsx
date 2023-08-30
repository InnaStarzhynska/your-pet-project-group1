import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import SvgIcon from '../SvgIcon/SvgIcon';
import { colors } from '../../constants/colors';
import { deleteNotice } from '../../redux/operations/fetchNotices';
import {
    Backdrop,
    Modal,
    ButtonClose,
    Header,
    Text,
    TextSpan,
    WrapperButtons,
    Button,
  ApproveButton,
} from './ModalDeleteAds.styled';

const modalApproveAction = document.querySelector('#modal_approveAction');

const ModalDeleteAds = ({ modalClose, _id, title }) => {
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

  const handleDelete = (_id) => {
    dispatch(deleteNotice({_id}));
    modalClose();
  };

  return createPortal(
        <Backdrop onClick={handleBackdropClick}>
          <Modal>
            <ButtonClose type="button" onClick={modalClose}>
              <SvgIcon id={'icon-cross-small'} />
            </ButtonClose>

              <Header>Delete advertisement?</Header>

              <Text>Are you sure you want to delete <TextSpan>“{title}”? </TextSpan> 
    You can`t undo this action.</Text>
            

            <WrapperButtons>
              <Button type="button" onClick={modalClose}>
                Cancel
              </Button>

              <ApproveButton type="button" onClick={() => {handleDelete(_id)}}>
                <span>Yes</span>
                <SvgIcon
                  id={'icon-trash-2'}
                  color={colors.textButtonColor}
                ></SvgIcon>
              </ApproveButton>
            </WrapperButtons>
          </Modal>
      </Backdrop>,
      modalApproveAction
  );
};

export default ModalDeleteAds;