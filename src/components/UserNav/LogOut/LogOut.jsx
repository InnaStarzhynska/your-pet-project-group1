import React, { useState } from 'react';
import SvgIcon from '../../SvgIcon/SvgIcon';
import { LinkLogOut, BoxLogOut } from './LogOut.styled';
import { colors } from 'constants/colors';
import ModalApproveAction from 'components/ModalApproveAction/ModalApproveAction';
import { Banner } from 'components/ModalApproveAction/ModalApproveAction.styled';

export default function LogOut({ isMenuOpen }) {
  const [modalClose, setModalClose] = useState(false);

  const toggleModal = () => {
    setModalClose(prevState => !prevState);
  };

  return (
    <>
      {modalClose ? (
        <ModalApproveAction modalClose={toggleModal}>
          <Banner>Already leaving?</Banner>
        </ModalApproveAction>
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
