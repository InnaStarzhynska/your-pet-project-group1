import { useSelector } from 'react-redux';
import { NoticesList } from './NoticesPage.styled';
import { selectNoticeById, selectNotices } from 'redux/selectors';
import NoticesCategoryItem from './NoticeCategoryItem';
import { useState } from 'react';
import ModalNotice from './ModalNotice';

export default function NoticesCategoriesList() {
  const notices = useSelector(selectNotices);
  const item = useSelector(selectNoticeById);
  const [isModalOpen, setModalOpen] = useState(Object.keys(item).length);
  
   const toggleModal = () => {
    setModalOpen(prevState => !prevState);
  };
  return (
    <><NoticesList>
      {isModalOpen ? (<ModalNotice isModalOpen={toggleModal}/>) : ( notices.map(item => {
        return <NoticesCategoryItem isModalOpen={setModalOpen} item={item} key={item._id} />
    }))}
      </NoticesList >
      </>)
}