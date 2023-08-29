import { useSelector } from 'react-redux';
import { NoticesList } from './NoticesPage.styled';
import { selectNoticeById, selectNotices } from 'redux/selectors';
import NoticesCategoryItem from './NoticeCategoryItem';
import { useEffect, useState } from 'react';
import ModalNotice from './ModalNotice';
import AddPetButton from 'components/AddPetButton/AddPetButton';

export default function NoticesCategoriesList() {
  const notices = useSelector(selectNotices);
  const item = useSelector(selectNoticeById);
  const [isModalOpen, setModalOpen] = useState(Object.keys(item).length);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

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
    setModalOpen(prevState => !prevState);
  };
  return (
    <><NoticesList>
      {isModalOpen ? (<ModalNotice isModalOpen={toggleModal}/>) : ( notices.map(item => {
        return <NoticesCategoryItem isModalOpen={setModalOpen} item={item} key={item._id} />
      }))}
      {isMobile && <AddPetButton/>}
      </NoticesList >
      </>)
}