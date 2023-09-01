import { selectLoggedIn } from 'redux/selectors';
import { NoticesNavList, NoticesNavbtn } from './NoticesPage.styled';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export default function NoticesCategoriesNav() {
  const isLoggedIn = useSelector(selectLoggedIn);
   const { categoryName: category } = useParams();

  return (
    <NoticesNavList>
      {!isLoggedIn ? (
        <>
          <NoticesNavbtn current={category==='sell'? "true": "false"} to={'/notices/sell'}>sell</NoticesNavbtn>
          <NoticesNavbtn current={category==='lost-found'? "true": "false"} to={'/notices/lost-found'}>lost/found</NoticesNavbtn>
          <NoticesNavbtn current={category==='in-good-hands'? "true": "false"} to={'/notices/in-good-hands'}>
            in good hands
          </NoticesNavbtn>
        </>
      ) : (
        <>
          <NoticesNavbtn current={category==='sell'? "true": "false"} to={'/notices/sell'}>sell</NoticesNavbtn>
          <NoticesNavbtn current={category==='lost-found'? "true": "false"} to={'/notices/lost-found'}>lost/found</NoticesNavbtn>
          <NoticesNavbtn current={category==='in-good-hands'? "true": "false"} to={'/notices/in-good-hands'}>
            in good hands
          </NoticesNavbtn>
          <NoticesNavbtn current={category==='favorite-ads'? "true": "false"} to={'/notices/favorite-ads'}>
            favorite ads
          </NoticesNavbtn>
          <NoticesNavbtn current={category==='my-ads'? "true": "false"} to={'/notices/my-ads'}>my ads</NoticesNavbtn>
        </>
      )}
    </NoticesNavList>
  );
}
