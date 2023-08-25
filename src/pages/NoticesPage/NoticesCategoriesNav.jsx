import { useState } from 'react';
import { NoticesNavList, NoticesNavbtn } from './NoticesPage.styled';

export default function NoticesCategoriesNav() {
  const [isLoggedIn] = useState(false);
  return (
    <NoticesNavList>
      {!isLoggedIn ? (
        <>
          <NoticesNavbtn to={`/sell`}>sell</NoticesNavbtn>
          <NoticesNavbtn to={`/lost-found`}>lost/found</NoticesNavbtn>
          <NoticesNavbtn to={`/in-good-hands`}>in good hands</NoticesNavbtn>
        </>
      ) : (
        <>
          <NoticesNavbtn to={`/sell`}>sell</NoticesNavbtn>
          <NoticesNavbtn to={`/lost-found`}>lost/found</NoticesNavbtn>
          <NoticesNavbtn to={`/in good hands`}>in good hands</NoticesNavbtn>
          <NoticesNavbtn to={`/favorite-ads`}>favorite ads</NoticesNavbtn>
          <NoticesNavbtn to={`/my ads`}>my ads</NoticesNavbtn>
        </>
      )}
    </NoticesNavList>
  );
}
