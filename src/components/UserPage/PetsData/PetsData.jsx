import PetsList from '../PetsList/PetsList';
import AddPetBtn from '../../AddPetButton/AddPetButton';

import {
  PetsContainer,
  PetsHeaderContainer,
  PetsTitle,
} from './PetsData.styled';

export default function PetsData () {
  
  return (
    <PetsContainer>
      <PetsHeaderContainer>
        <PetsTitle>My pets:</PetsTitle>
        <AddPetBtn />
      </PetsHeaderContainer>
      <PetsList />
    </PetsContainer>
  );
};
