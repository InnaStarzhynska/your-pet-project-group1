import React from 'react';
import { PetsCardContainer } from './PetsList.styled';
import PetsItemDefault from '../PetsItem/PetsItemDefault/PetsItemDefault';
import { useSelector } from 'react-redux';
import { selectPets } from 'redux/selectors';

export const PetsList = () => {
  const pets = useSelector(selectPets);

  return (
    <>
      <PetsCardContainer style={{ position: 'relative' }}>
        {pets.length === 0 ? (
          <h4>Add information about your pet</h4>
        ) : (
          pets.map(pet => (
            <PetsItemDefault
              key={pet._id}
              name={pet.name}
              birthday={pet.birthday}
              avatar={pet.avatar}
              type={pet.type}
              comments={pet.comments}
            />
          ))
        )}
      </PetsCardContainer>
    </>
  );
};

export default PetsList;
