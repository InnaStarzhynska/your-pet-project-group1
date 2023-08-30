import {
  PetsCard,
  PetsImg,
  PetsInfoContainer,
  PetsInfoTitle,
  PetsInfoText,
} from '../PetsItem.styled';
import UserDefaultAvatar from '../../../../images/Photo_default@2x.jpg';
// import { useState } from 'react';
import DeletePetsModal from '../DeletePetsModal/DeletePetsModal';

export const PetsItemDefault = ({ name, birthday, type, comments, _id, avatar }) => {
  // const [petsModal, setPetsModal] = useState(false);

  return (
    <>
      <PetsCard style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: '100%',
            width: '100%',
            borderRadius: '40px',
            // zIndex: '10',
          }}
        ></div>
        <PetsImg
          src={avatar}
          alt={`Pets avatar ${name}`}
          loading="lazy"
        />

        <PetsInfoContainer>
          <PetsInfoText>Please add you own pet</PetsInfoText>

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
        <DeletePetsModal />
      </PetsCard>
    </>
  );
};
export default PetsItemDefault;
