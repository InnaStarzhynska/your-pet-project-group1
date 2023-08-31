import {
  PetsCard,
  PetsImg,
  PetsInfoContainer,
  PetsInfoTitle,
  PetsInfoText,
} from './PetsItem.styled';
import avatarDefault2x from '../../../images/Photo_default@2x.jpg';

export const PetsItem = ({ name, birthday, avatar,type, comments }) => {
  return (
    <>
      <PetsCard>
        <PetsImg src={avatar} alt={`Pets avatar`} loading="lazy" />
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
            <PetsInfoTitle>Type:</PetsInfoTitle>
            {type}
          </PetsInfoText>
          {comments && (
            <PetsInfoText>
              <PetsInfoTitle>Comments: </PetsInfoTitle>
              {comments}
            </PetsInfoText>
          )}
        </PetsInfoContainer>
      </PetsCard>
    </>
  );
};

export default PetsItem;
