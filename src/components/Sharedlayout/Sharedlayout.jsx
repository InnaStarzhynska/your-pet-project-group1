import Header from 'components/Header/Header';
import IsLoading from 'components/IsLoading/IsLoading';
import { Suspense } from 'react';
import { Outlet } from 'react-router';

export default function Sharedlayout() {
  return (
    <>
      <Header />
      <Suspense fallback={<IsLoading/>}>
        <Outlet  />
      </Suspense>
    </>
  );
}
