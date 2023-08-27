import PetsItem from '../PetsItem/PetsItem';
import React, { useState } from 'react';
import UserDefaultAvatar from '../../../images/Photo_default@2x.jpg';
import { PetsCardContainer } from './PetsList.styled';
import PetsItemDefault from '../PetsItem/PetsItemDefault/PetsItemDefault';

export const PetsList = () => {
  const [pets] = useState([]);

  const defaultPet = [
    {
      id: 1,
      name: 'Your pet name',
      birthday: 'DD-MM-YYYY',
      photoUrl: UserDefaultAvatar,
      type: 'Type of your pet',
      comments: 'The best pets',
    },
  ];
  return (
    <>
      {pets?.length === 0 ? (
        <PetsCardContainer style={{ position: 'relative' }}>
          {defaultPet.map(pet => (
            <PetsItemDefault
              key={pet.id}
              name={pet.name}
              birthday={pet.birthday}
              photoUrl={pet.photoUrl}
              type={pet.type}
              comments={pet.comments}
              id={pet.id}
            />
          ))}
        </PetsCardContainer>
      ) : (
        <PetsCardContainer>
          {pets.map(({ id, name, birthday, photoUrl, type, comments }) => (
            <PetsItem
              key={id}
              name={name}
              birthday={birthday}
              photoUrl={photoUrl}
              type={type}
              comments={comments}
              id={id}
            />
          ))}
        </PetsCardContainer>
      )}
    </>
  );
};

export default PetsList;
