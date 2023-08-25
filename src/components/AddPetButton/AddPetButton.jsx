import SvgIcon from 'components/SvgIcon/SvgIcon';
import { AddPetBtn, AddPetContainer } from './AddPetButton.styled';
import { useLocation } from 'react-router-dom';

export default function AddPetButton() {
  const isMobile = window.innerWidth <= 768;
  const location = useLocation();
  return (
    <AddPetContainer>
      <AddPetBtn to={`/add-pet`} state={{ from: location }}>
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
