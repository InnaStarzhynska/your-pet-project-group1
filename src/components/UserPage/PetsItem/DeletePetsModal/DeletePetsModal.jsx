import { BoxPetsDelete } from './DeletePetsModal.styled';
import React, { useState } from 'react';
import ModalApproveAction from './ModalApproveAction/ModalApproveAction';
import { Text } from 'components/ModalApproveAction/ModalApproveAction.styled';
import SvgIcon from 'components/SvgIcon/SvgIcon';

export default function DeletePetsModal({ isMenuOpen }) {
  const [modalClose, setModalClose] = useState(false);

  const toggleModal = () => {
    setModalClose(prevState => !prevState);
  };

  return (
    <>
      {modalClose ? (
        <ModalApproveAction modalClose={toggleModal}>
          <Text>Delete pets?</Text>
        </ModalApproveAction>
      ) : (
        <BoxPetsDelete type="button" $isopen={isMenuOpen} onClick={toggleModal}>
          <SvgIcon id={'icon-trash-2'} className={'icon-trash-2'} />
        </BoxPetsDelete>
      )}
    </>
  );
}
