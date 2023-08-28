import { useSelector } from 'react-redux';
import { NoticesList } from './NoticesPage.styled';
import { selectNotices } from 'redux/selectors';
import NoticesCategoryItem from './NoticeCategoryItem';

export default function NoticesCategoriesList() {
  const notices = useSelector(selectNotices);
  return (<NoticesList>
    {notices.map(item => {
      return <NoticesCategoryItem item={item} key={item._id} />
    })}
    </NoticesList >)
}