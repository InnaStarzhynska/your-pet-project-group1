import { useState } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from 'yup';
import { logIn } from "../../redux/operations";

import {
  InputWrapper,
  FormContainer,
  PassWrapper,
  Input,
  ShowPassBtn,
  IconShown,
  IconHidden,
  Btn,
  LoginHeader,
  Text,
  WrapperCheckCross,
  IconCheck,
  IconCross,
  WrapperInput,
  WrapperShowCheck,
  Correct,
  Error,
} from "./LoginForm.styled";

const emailValid =
  /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})$/;
const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email field is required")
    .matches(emailValid, "Enter a valid Email")
    .max(70, "Maximum 70 characters")
    .min(10, "Minimum 10 characters")
    .email(),
  password: Yup.string()
    .matches(passwordValid, "Please enter min 6 characters and max 16")
    .max(16, "Please enter 16 characters or less")
    .min(6, "Enter 6 or more characters")
    .required("Password field is required"),
});

const InputError = ({ name }) => {
  return (
    <Error>
      <p style={{ margin: 0 }}>{name}</p>
    </Error>
  );
};

const InputCorrect = ({ name }) => {
  return (
    <Correct>
      <p style={{ margin: 0 }}>{name}</p>
    </Correct>
  );
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState(false);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const { email, password } = values;
    dispatch(
      logIn({
        email: email,
        password: password,
      })
    );

    resetForm();
  };

  const togglePassword = () => setPassword(!password);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      {({ errors, touched, values }) => (
        <FormContainer>
          <LoginHeader>Login</LoginHeader>
          <InputWrapper>
            <PassWrapper>
              <WrapperInput
                className={
                  (values.email === "" && "default") ||
                  (touched.email && errors.email && "error") ||
                  (!errors.email && "success")
                }
              >
                <Input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder={"Email"}
                />
                <WrapperCheckCross>
                  {(values.email === "" && true) ||
                    (touched.email && errors.email && <IconCross />) ||
                    (!errors.email && <IconCheck />)}
                </WrapperCheckCross>
              </WrapperInput>
              {values.email === "" && true
                ? null
                : errors.email &&
                  touched.email !== "" && (
                    <InputError name="Enter a valid Email" />
                  )}
            </PassWrapper>
            <PassWrapper>
              <WrapperInput
                className={
                  (values.password === "" && "default") ||
                  (touched.password && errors.password && "error") ||
                  (!errors.password && "success")
                }
              >
                <Input
                  type={password ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder={"Password"}
                />
                <WrapperShowCheck>
                  <ShowPassBtn
                    type="button"
                    onClick={togglePassword}
                    data-shown={password}
                    className="btnShowHidden"
                  >
                    {password ? (
                      <IconShown viewBox="0 0 32 32">
                        <path
                          fill="none"
                          stroke="#54adff"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeMiterlimit="4"
                          strokeWidth="2"
                          d="M2.667 16c0 0 4.848-9.333 13.333-9.333s13.333 9.333 13.333 9.333-4.849 9.333-13.333 9.333c-8.485 0-13.333-9.333-13.333-9.333z"
                        ></path>
                        <path
                          fill="none"
                          stroke="#54adff"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeMiterlimit="4"
                          strokeWidth="2"
                          d="M16 20c2.209 0 4-1.791 4-4s-1.791-4-4-4c-2.209 0-4 1.791-4 4s1.791 4 4 4z"
                        ></path>
                      </IconShown>
                    ) : (
                      <IconHidden viewBox="0 0 32 32">
                        <path
                          fill="none"
                          stroke="#54adff"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeMiterlimit="4"
                          strokeWidth="2"
                          d="M13.019 7.060c0.936-0.251 1.931-0.394 2.981-0.394 8.485 0 13.333 9.333 13.333 9.333s-1.105 2.128-3.184 4.351M5.799 11.704c-2.045 2.203-3.132 4.296-3.132 4.296s4.848 9.333 13.333 9.333c1.069 0 2.081-0.148 3.033-0.407M15.333 19.945c-1.446-0.243-2.628-1.26-3.106-2.611M16.667 12.055c1.675 0.281 2.997 1.603 3.278 3.278M4 4l24 24"
                        ></path>
                      </IconHidden>
                    )}
                  </ShowPassBtn>
                  {(values.password === "" && true) ||
                    (touched.password && errors.password && <IconCross />)}

                  {(values.password === "" && true) ||
                    (!errors.password && <IconCheck />)}
                </WrapperShowCheck>
              </WrapperInput>
              {values.password === "" && true
                ? null
                : !errors.password &&
                  touched.password !== "" && (
                    <InputCorrect name="Password is secure" />
                  )}
            </PassWrapper>
          </InputWrapper>
          <Btn type="submit">Login</Btn>
          <Text>
            Don't have an account?<a href="/register">Register</a>
          </Text>
        </FormContainer>
      )}
    </Formik>
  );
};

export default LoginForm;