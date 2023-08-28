import PetsList from '../PetsList/PetsList';
import AddPetBtn from '../../AddPetButton/AddPetButton';

import {
  PetsContainer,
  PetsHeaderContainer,
  PetsTitle,
} from './PetsData.styled';

export const PetsData = () => {
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

export default PetsData;
