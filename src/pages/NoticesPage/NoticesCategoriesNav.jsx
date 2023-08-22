import { useState } from 'react';
import { Button, NoticesNavList } from './NoticesPage.styled';

export default function NoticesCategoriesNav() {
  const [isLoggedIn] = useState(true);
  return (
    <NoticesNavList>
      {!isLoggedIn ? (
        <>
          <Button>sell</Button>
          <Button>lost/found</Button>
          <Button>in good hands</Button>
        </>
      ) : (
        <>
          <Button>sell</Button>
          <Button>lost/found</Button>
          <Button>in good hands</Button>
          <Button>favorite ads</Button>
          <Button>my ads</Button>
        </>
      )}
    </NoticesNavList>
  );
}
