import {Route, Routes } from 'react-router';
import Sharedlayout from './Sharedlayout/Sharedlayout';
import NotFound from './NotFound/NotFound';
import UserPage from 'pages/UserPage/UserPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import MainPage from 'pages/MainPage/MainPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import AddPetPage from 'pages/AddPetPage/AddPetPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Sharedlayout />}>
        <Route index element={<MainPage />} />
        <Route path="/notices/:sell" element={<NoticesPage />}>
          <Route path={'lost-found'}  />
          <Route path={'in-good-hands'}  />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/add-pet" element={<AddPetPage/> } />
        <Route path="/news" />
        <Route path="/friends" />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
