import SvgIcon from 'components/SvgIcon/SvgIcon';
import { AddPetBtn, AddPetContainer } from './AddPetButton.styled';

export default function AddPetButton() {
  const isMobile = window.innerWidth <= 768;
  return (
    <AddPetContainer>
      <AddPetBtn>
        Add pet
        {isMobile ? (
          <SvgIcon id={'icon-plus'} color="#fff" />
        ) : (
          <SvgIcon id={'icon-plus-small'} color="#fff" />
        )}
      </AddPetBtn>
    </AddPetContainer>
  );
}
