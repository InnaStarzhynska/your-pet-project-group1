import SvgIcon from 'components/SvgIcon/SvgIcon';
import { AddPetBtn } from './AddPetButton.styled';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLoggedIn } from '../../redux/selectors';
import ModalAtention from '../ModalAtention/ModalAtention';

export default function AddPetButton() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isShownModal, setIsShownModal] = useState(false);
  const isLoggedIn = useSelector(selectLoggedIn);

  console.log('modalClose->', isShownModal);

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

  const toggleModal = () => {
    setIsShownModal(prevState => !prevState);
    return;
  };

  return (
    <>
      {isLoggedIn ? (
        <AddPetBtn to={`/add-pet`}>
          Add pet
          {isMobile ? (
            <SvgIcon id={'icon-plus'} color="#fff" />
          ) : (
            <SvgIcon id={'icon-plus-small'} color="#fff" />
          )}
        </AddPetBtn>
      ) : (
        <AddPetBtn onClick={toggleModal}>
          Add pet
          {isMobile ? (
            <SvgIcon id={'icon-plus'} color="#fff" />
          ) : (
            <SvgIcon id={'icon-plus-small'} color="#fff" />
          )}
        </AddPetBtn>
      )}
      {isShownModal && <ModalAtention toggleModal={toggleModal}></ModalAtention>}
    </>
  );
}
