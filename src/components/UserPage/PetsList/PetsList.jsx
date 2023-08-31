import React from 'react';
import { PetsCardContainer } from './PetsList.styled';
import { useSelector } from 'react-redux';
import { selectPets } from 'redux/selectors';
import PetsItem from '../PetsItem/PetsItem';

export default function PetsList () {
  const pets = useSelector(selectPets);

  return (
    <>
      <PetsCardContainer style={{ position: 'relative' }}>
        {pets.length === 0 ? (
          <h4>Add information about your pet</h4>
        ) : (
            pets.map((pet, index) => {
               return  < PetsItem
                 key={index}
                 id={pet.id}
              name = { pet.name }
              birthday = { pet.dateOfBirth }
              avatar = { pet.avatar }
              type = { pet.type }
              comments = { pet.comments }
                />
            })
        )}
  
      </PetsCardContainer>
    </>
  );
};
