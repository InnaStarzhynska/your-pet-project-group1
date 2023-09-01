import SvgIcon from '../../SvgIcon/SvgIcon';
import { BoxLogOut } from './Logout.styled';
import React, { useState } from 'react';
// import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import ModalLogout from 'components/Modals/ModalLogout';
import { Text } from 'components/Modals/ModalLogout.styled';

export default function LogOut({ isMenuOpen }) {
  const [modalClose, setModalClose] = useState(false);

  const toggleModal = () => {
    setModalClose(prevState => !prevState);
  };

  return (
    <>
      {modalClose ? (
        <ModalLogout modalClose={toggleModal}>
          <Text>Already leaving?</Text>
        </ModalLogout>
      ) : (
        <BoxLogOut type="button" $isopen={isMenuOpen} onClick={toggleModal}>
          <SvgIcon id={'icon-logout'} />
          Log out&nbsp;&nbsp;
        </BoxLogOut>
      )}
    </>
  );
}
