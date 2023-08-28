import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../redux/operations/fetchUser';

import {
  Button,
  BtnContainer,
  ErrorWrap,
  FormContainer,
  Input,
  InputContainer,
  InputWrap,
  Title,
  IconBtn,
  CrossIcon,
  PasswordIcon,
  StyledLink,
  PasswordMessage,
} from './LoginForm.styled';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { colors } from 'constants/colors';

const emailValid =
  /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})$/;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Required')
    .matches(emailValid, 'Invalid email address')
    .email(),
  password: Yup.string()
    // .max(16, 'Password must be no more than 16 characters')
    // .min(6, 'Password must be at least 6 characters')
    .required('Required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const [password, setPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
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
  const clearInput = (fieldName, setFieldValue) => {
    setFieldValue(fieldName, '');
  };

  const togglePassword = () => setPassword(!password);
  const hasFieldError = (errors, fieldName) => errors[fieldName];
  const isFieldValid = (errors, fieldName) => !errors[fieldName];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      {({ isSubmitting, errors, touched, values, setFieldValue }) => (
        <Form autoComplete="off">
          <FormContainer>
            <InputContainer>
              <Title>Login</Title>
              <InputWrap>
                <label htmlFor="email" hidden>
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder={'Email'}
                />
                {touched.email && hasFieldError(errors, 'email') && (
                  <CrossIcon
                    type="button"
                    onClick={() => clearInput('email', setFieldValue)}
                  >
                    <SvgIcon
                      id={'icon-cross-small'}
                      color={colors.redErrorColor}
                    />
                  </CrossIcon>
                )}
                {touched.email && isFieldValid(errors, 'email') && (
                  <PasswordIcon>
                    <SvgIcon
                      id="icon-check"
                      color={colors.greenStepSuccessColor}
                    />
                  </PasswordIcon>
                )}
              </InputWrap>
              {touched.email && !errors.email ? (
                <PasswordMessage>Email is secure</PasswordMessage>
              ) : (
                <ErrorWrap>
                  <ErrorMessage name="email" component="div" />
                </ErrorWrap>
              )}
              <InputWrap>
                <label htmlFor="password" hidden>
                  Password
                </label>
                <Input
                  id="password"
                  type={password ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                   className={
                  (values.password === "" && "default") ||
                  (touched.password && errors.password && "error") ||
                  (!errors.password && "success")
                }
                />
                {password ? (
                  <IconBtn type="button" onClick={togglePassword}>
                    <SvgIcon id={'icon-eye-open'} />
                  </IconBtn>
                ) : (
                  <IconBtn type="button" onClick={togglePassword}>
                    <SvgIcon id={'icon-eye-closed'} />
                  </IconBtn>
                )}

                {touched.password && !errors.password ? (
                  <PasswordMessage>Password is secure</PasswordMessage>
                ) : (
                  <ErrorWrap>
                    <ErrorMessage name="password" component="div" />
                  </ErrorWrap>
                )}
              </InputWrap>
            </InputContainer>
            <BtnContainer>
              <Button type="submit" disabled={isSubmitting}>
                Login
              </Button>
              <p>
                Don't have an account?{' '}
                <StyledLink to="/Register">Register</StyledLink>
              </p>
            </BtnContainer>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;