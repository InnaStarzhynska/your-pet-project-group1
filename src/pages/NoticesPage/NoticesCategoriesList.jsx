import { useSelector } from 'react-redux';
import { NoticesList } from './NoticesPage.styled';
import { selectLoadingNotices,  selectNoticeById, selectNotices } from 'redux/selectors';
import NoticesCategoryItem from './NoticeCategoryItem';
import { useEffect, useState } from 'react';
import ModalNotice from './ModalNotice';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import { Text } from './NoticesCategoriesList.styled';
import IsLoading from 'components/IsLoading/IsLoading';

export default function NoticesCategoriesList() {
  const notices = useSelector(selectNotices);
  const item = useSelector(selectNoticeById);
  const [isModalOpen, setModalOpen] = useState(()=> {return Object.keys(item).length ? true : false});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const isNotices = notices.length === 0 ? false : true;
  const isLoading = useSelector(selectLoadingNotices);

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
    <>{isLoading ? <IsLoading /> :
      (<NoticesList>
        {isNotices ? notices.map(item => {
            return (
              <NoticesCategoryItem
                isModalOpen={setModalOpen}
                item={item}
                key={item._id}
              />
            );
          }): <Text>There are no pets here yet </Text>}
        {isModalOpen && <ModalNotice isModalOpen={toggleModal} />}
        {isMobile && <AddPetButton />}
      </NoticesList>)}
    </>
  );
}
