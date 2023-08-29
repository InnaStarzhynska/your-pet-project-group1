import { useSelector } from 'react-redux';
import { NoticesList } from './NoticesPage.styled';
import { selectNotices } from 'redux/selectors';
import NoticesCategoryItem from './NoticeCategoryItem';
import { useState } from 'react';
import ModalNotice from './ModalNotice';

export default function NoticesCategoriesList() {
  const [isModalOpen, setModalOpen] = useState(false);
  const notices = useSelector(selectNotices);
   const toggleModal = () => {
    setModalOpen(prevState => !prevState);
  };
  return (
    <><NoticesList>
      {isModalOpen ? (<ModalNotice isOpenModal={toggleModal}/>) : ( notices.map(item => {
        return <NoticesCategoryItem isModalOpen={setModalOpen} item={item} key={item._id} />
    }))}
      </NoticesList >
      </>)
}