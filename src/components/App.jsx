import { Route, Routes } from 'react-router';
import Sharedlayout from './Sharedlayout/Sharedlayout';
import NotFound from './NotFound/NotFound';
import UserPage from 'pages/UserPage/UserPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import MainPage from 'pages/MainPage/MainPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import AddPetPage from 'pages/AddPetPage/AddPetPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from 'redux/operations';
import { selectRefreshing } from 'redux/selectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import NewsPage from 'pages/NewsPage/NewsPage';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Sharedlayout />}>
          <Route index element={<MainPage />} />
          <Route path="/notices/:sell" element={<NoticesPage />}>
            <Route path={'lost-found'} />
            <Route path={'in-good-hands'} />
            <Route path={'favorite'} />
            <Route path={'own'} />
          </Route>
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/user" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={RegisterPage} redirectTo="/user" />
            }
          />
          <Route
            path="/user"
            element={<PrivateRoute component={UserPage} redirectTo="/login" />}
          />
          <Route
            path="/add-pet"
            element={
              <PrivateRoute component={AddPetPage} redirectTo="/login" />
            }
          />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/friends" />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    )
  );
};
