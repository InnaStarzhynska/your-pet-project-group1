import { selectLoggedIn } from 'redux/selectors';
import { NoticesNavList, NoticesNavbtn } from './NoticesPage.styled';
import { useSelector } from 'react-redux';

export default function NoticesCategoriesNav() {
  const isLoggedIn = useSelector(selectLoggedIn);
  return (
    <NoticesNavList>
      {!isLoggedIn ? (
        <>
          <NoticesNavbtn to={'/notices/sell'}>sell</NoticesNavbtn>
          <NoticesNavbtn to={'/notices/lost-found'}>lost/found</NoticesNavbtn>
          <NoticesNavbtn to={'/notices/in-good-hands'}>
            in good hands
          </NoticesNavbtn>
        </>
      ) : (
        <>
          <NoticesNavbtn to={'/notices/sell'}>sell</NoticesNavbtn>
          <NoticesNavbtn to={'/notices/lost-found'}>lost/found</NoticesNavbtn>
          <NoticesNavbtn to={'/notices/in-good-hands'}>
            in good hands
          </NoticesNavbtn>
          <NoticesNavbtn to={'/notices/favorite-ads'}>
            favorite ads
          </NoticesNavbtn>
          <NoticesNavbtn to={'/notices/my-ads'}>my ads</NoticesNavbtn>
        </>
      )}
    </NoticesNavList>
  );
}
