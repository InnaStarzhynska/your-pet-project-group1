import React from 'react';
import { PetsCardContainer } from './PetsList.styled';
import PetsItemDefault from '../PetsItem/PetsItemDefault/PetsItemDefault';
import { useSelector } from 'react-redux';

export const PetsList = () => {
  const pets = useSelector(state => state.user.pets);

  console.log(pets);

  return (
    <>
      <PetsCardContainer style={{ position: 'relative' }}>
        {!pets.length === 0 ? (
          <h4>Pets not found</h4>
        ) : (
          pets.map(pet => (
            <PetsItemDefault
              key={pet.id}
              name={pet.name}
              birthday={pet.birthday}
              photoUrl={pet.photoUrl}
              type={pet.type}
              comments={pet.comments}
              id={pet.id}
            />
          ))
        )}
      </PetsCardContainer>
    </>
  );
};

export default PetsList;
