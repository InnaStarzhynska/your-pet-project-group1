import {
  PetsCard,
  PetsImg,
  PetsInfoContainer,
  PetsInfoTitle,
  PetsInfoText,
  ButtonDeletePet,
} from './PetsItem.styled';
import { useState } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import ModalDeleteAds from 'components/Modals/ModalDeleteAds';

export default function PetsItem ({ name, birthday, type, comments, id, avatar }) {
  const [isModalOpen, setModalOpen] = useState(false);


  const toggleModal = () => {
    setModalOpen(prevState => !prevState)
  }
  return (
    <>
      <PetsCard style={{ position: 'relative' }}>
        <PetsImg
          src={avatar}
          alt={`Pets avatar ${name}`}
          loading="lazy"
        />
        <PetsInfoContainer>
          <PetsInfoText>
            <PetsInfoTitle> Name: </PetsInfoTitle>
            {name}
          </PetsInfoText>
          <PetsInfoText>
            <PetsInfoTitle>Date of birth: </PetsInfoTitle>
            {birthday}
          </PetsInfoText>
          <PetsInfoText>
            <PetsInfoTitle>Type: </PetsInfoTitle>
            {type}
          </PetsInfoText>
          {comments && (
            <PetsInfoText>
              <PetsInfoTitle>Comments: </PetsInfoTitle>
              {comments}
            </PetsInfoText>
          )}
        </PetsInfoContainer>
        <ButtonDeletePet type="button" onClick={()=> {setModalOpen(true)}}>
          <SvgIcon id={'icon-trash-2'} className={'icon-trash-2'} />
        </ButtonDeletePet>
        {isModalOpen && <ModalDeleteAds modalClose={toggleModal} _id={id} title={name} type={'pet'} />}
      </PetsCard>
    </>
  );
};
