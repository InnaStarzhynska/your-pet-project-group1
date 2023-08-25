import { useState } from 'react';
import { NoticesNavList, NoticesNavbtn } from './NoticesPage.styled';

export default function NoticesCategoriesNav() {
  const [isLoggedIn] = useState(false);
  return (
    <NoticesNavList>
      {!isLoggedIn ? (
        <>
          <NoticesNavbtn>sell</NoticesNavbtn>
          <NoticesNavbtn>lost/found</NoticesNavbtn>
          <NoticesNavbtn>in good hands</NoticesNavbtn>
        </>
      ) : (
        <>
          <NoticesNavbtn>sell</NoticesNavbtn>
          <NoticesNavbtn>lost/found</NoticesNavbtn>
          <NoticesNavbtn>in good hands</NoticesNavbtn>
          <NoticesNavbtn>favorite ads</NoticesNavbtn>
          <NoticesNavbtn>my ads</NoticesNavbtn>
        </>
      )}
    </NoticesNavList>
  );
}
