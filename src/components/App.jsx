import {Route, Routes } from 'react-router';
import Sharedlayout from './Sharedlayout/Sharedlayout';
import { lazy, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { getCurrentUser } from 'redux/operations/fetchUser';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Navigate } from "react-router-dom";

const MainPage = lazy(() => import('../pages/MainPage/MainPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const AddPetPage = lazy(() => import('../pages/AddPetPage/AddPetPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const NotFound = lazy(() => import('../components/NotFound/NotFound'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser())
}, [dispatch])

  return (
      <Routes>
      <Route path="/" element={<Sharedlayout />}>
        <Route index element={<MainPage />} />
        <Route path="/notices" element={<Navigate to={"/notices/sell"} />} />
        <Route path="/notices/:categoryName" element={<NoticesPage />} >
          <Route path={'sell'}/>
          <Route path={'lost-found'}  />
          <Route path={'in-good-hands'} />
          <Route path={'favorite'} />
          <Route path={'own'} />
        </Route>
        <Route path="/login" element={<RestrictedRoute component={LoginPage} redirectTo='/user'/>} />
        <Route path="/register" element={<RestrictedRoute component={RegisterPage} redirectTo='/user'/>} />
        <Route path="/user" element={<PrivateRoute component={UserPage} redirectTo='/login'/>} />
        <Route path="/add-pet" element={<PrivateRoute component={AddPetPage} redirectTo='/login'/>} />
        <Route path="/news" element={<NewsPage/>} />
        <Route path="/friends" />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
