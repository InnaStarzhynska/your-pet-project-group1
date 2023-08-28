import SvgIcon from '../../SvgIcon/SvgIcon';
import { BoxLogOut } from './Logout.styled';
import React, { useState } from 'react';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import { Text } from 'components/ModalApproveAction/ModalApproveAction.styled';

export default function LogOut({ isMenuOpen }) {
  const [modalClose, setModalClose] = useState(false);

  const toggleModal = () => {
    setModalClose(prevState => !prevState);
  };

  return (
    <>
      {modalClose ? (
        <ModalApproveAction modalClose={toggleModal}>
          <Text>Already leaving?</Text>
        </ModalApproveAction>
      ) : (
        <BoxLogOut type="button" $isopen={isMenuOpen} onClick={toggleModal}>
          <SvgIcon id={'icon-logout'} />
          Log out&nbsp;&nbsp;
        </BoxLogOut>
      )}
    </>
  );
}
