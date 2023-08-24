import {
  ApproveButton,
  Backdrop,
  Button,
  ButtonClose,
  Modal,
  WrapperButtons,
} from './ModalApproveAction.styled';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { colors } from 'constants/colors';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';

export default function ({ modalClose, children }) {
  const dispatch = useDispatch();

  const handleClickClose = () => {
    modalClose();
  };

  const handleLogout = () => {
    dispatch(logOut());
    modalClose();
  };

  return (
    <Backdrop>
      <Modal>
        <ButtonClose onClick={handleClickClose}>
          <SvgIcon id={'icon-cross-small'} />
        </ButtonClose>
        {children}
        <WrapperButtons>
          <Button onClick={handleClickClose}>Cancel</Button>
          <ApproveButton onClick={handleLogout}>
            <span>Yes</span>
            <SvgIcon
              id={'icon-logout'}
              color={colors.textButtonColor}
            ></SvgIcon>
          </ApproveButton>
        </WrapperButtons>
      </Modal>
    </Backdrop>
  );
}
