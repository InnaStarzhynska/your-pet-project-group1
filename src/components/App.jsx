import { Header } from "./Header/Header";
import { LoginForm } from "./LoginForm/LoginForm";
import { Main } from "./Main/Main";
import { Modal } from "./Modal/Modal";
import { RegisterForm } from "./RegisterForm/RegisterForm";

export const App = () => {
  return (
    <>
      <Header/>
      <Main />
      <RegisterForm />
      <LoginForm />
      <Modal/>
      </>
  );
};
