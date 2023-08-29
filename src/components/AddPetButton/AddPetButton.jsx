import SvgIcon from 'components/SvgIcon/SvgIcon';
import { AddPetBtn, AddPetContainer } from './AddPetButton.styled';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function AddPetButton() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
      <AddPetBtn to={`/add-pet`} state={{ from: location }}>
        Add pet
        {isMobile ? (
          <SvgIcon id={'icon-plus'} color="#fff" />
        ) : (
          <SvgIcon id={'icon-plus-small'} color="#fff" />
        )}
      </AddPetBtn>
    
  );
}
