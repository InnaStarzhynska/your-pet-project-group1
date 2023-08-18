import {Route, Routes } from 'react-router';
import  LoginForm  from './LoginForm/LoginForm';
import  Main  from './Main/Main';
import  RegisterForm  from './RegisterForm/RegisterForm';
import Sharedlayout from './Sharedlayout/Sharedlayout';
import FindPet from './FindPet/FindPet';
import UserPage from './UserPage/UserPage';
import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Sharedlayout />}>
        <Route index element={<Main />} />
        <Route path="/notices/:sell" element={<FindPet />}>
          <Route path={'lost-found'} element={<></>} />
          <Route path={'in-good-hands'} element={<></>} />
        </Route>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/add-pet" />
        <Route path="/news" />
        <Route path="/friends" />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
