import React from 'react';
import { PetsCardContainer, Text } from './PetsList.styled';
import { useSelector } from 'react-redux';
import { selectPets } from 'redux/selectors';
import PetsItem from '../PetsItem/PetsItem';
import { formateDate } from 'utils/formatedDate';

export default function PetsList () {
  const pets = useSelector(selectPets);

  return (
    <>
      <PetsCardContainer style={{ position: 'relative' }}>
        {pets.length === 0 ? (
          <Text>Add information about your pet</Text>
        ) : (
            pets.map((pet, index) => {
             
               return  < PetsItem
                 key={index}
                 id={pet._id}
              name = { pet.name }
              birthday = { formateDate(pet.dateOfBirth) }
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
