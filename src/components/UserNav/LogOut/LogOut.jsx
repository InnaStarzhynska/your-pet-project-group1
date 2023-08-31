import React, { useState } from 'react';
import SvgIcon from '../../SvgIcon/SvgIcon';
import { LinkLogOut, BoxLogOut } from './LogOut.styled';
import { colors } from 'constants/colors';
// import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import ModalLogout from 'components/Modals/ModalLogout';
import { Text } from 'components/ModalApproveAction/ModalApproveAction.styled';

export default function LogOut({ isMenuOpen, closeMenu }) {
  const [modalClose, setModalClose] = useState(false);

  const toggleModal = () => {
    closeMenu()
    setModalClose(prevState => !prevState);
  };

  return (
    <>
      {modalClose ? (
        <ModalLogout modalClose={toggleModal}>
          
          <Text>Already leaving?</Text>
        </ModalLogout>
      ) : (
        <BoxLogOut $isopen={isMenuOpen} onClick={toggleModal}>
          <LinkLogOut>
            Log out&nbsp;&nbsp;
            <SvgIcon id={'icon-logout'} color={colors.secondaryTextColor} />
          </LinkLogOut>
        </BoxLogOut>
      )}
    </>
  );
}
