import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../redux/operations';

import {
  InputWrapper,
  FormContainer,
  PassWrapper,
  Input,
  ShowPassBtn,
  Btn,
  LoginHeader,
  Text,
  IconCheck,
  WrapperInput,
  Correct,
  Error,
  StyledLink,
} from './LoginForm.styled';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { colors } from 'constants/colors';

const emailValid =
  /^([a-zA-Z0-9]{1}[a-zA-Z0-9_\-.]{1,})@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,4})$/;

const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email field is required')
    .matches(emailValid, 'Enter a valid Email')
    .max(70, 'Maximum 70 characters')
    .min(10, 'Minimum 10 characters')
    .email(),
  password: Yup.string()
    .matches(passwordValid, 'Please enter min 6 characters and max 16')
    .max(16, 'Please enter 16 characters or less')
    .min(6, 'Enter 6 or more characters')
    .required('Password field is required'),
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

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      {({ errors, touched, values, setFieldValue }) => (
        <FormContainer>
          <LoginHeader>Login</LoginHeader>
          <InputWrapper>
            <PassWrapper>
              <WrapperInput
                className={
                  (values.email === '' && 'default') ||
                  (touched.email && errors.email && 'error') ||
                  (!errors.email && 'success')
                }
              >
                <Input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder={'Email'}
                />
                {(values.email === '' && true) ||
                  (touched.email && errors.email && (
                    <IconCheck
                      type="button"
                      onClick={() => clearInput('email', setFieldValue)}
                    >
                      <SvgIcon
                        id={'icon-cross-small'}
                        color={colors.redErrorColor}
                      />
                    </IconCheck>
                  )) ||
                  (!errors.email && (
                    <IconCheck>
                      <SvgIcon
                        id={'icon-check'}
                        color={colors.greenStepSuccessColor}
                      />
                    </IconCheck>
                  ))}
              </WrapperInput>

              {values.email === '' && true
                ? null
                : errors.email &&
                  touched.email !== '' && (
                    <InputError name="Enter a valid Email" />
                  )}
            </PassWrapper>
            <PassWrapper>
              <WrapperInput
                className={
                  (values.password === '' && 'default') ||
                  (touched.password && errors.password && 'error') ||
                  (!errors.password && 'success')
                }
              >
                <Input
                  type={password ? 'text' : 'password'}
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder={'Password'}
                />

                <ShowPassBtn
                  type="button"
                  onClick={togglePassword}
                  data-shown={password}
                  className="btnShowHidden"
                >
                  {password ? (
                    <SvgIcon id={'icon-eye-open'} />
                  ) : (
                    <SvgIcon id={'icon-eye-closed'} />
                  )}
                </ShowPassBtn>
                {(values.password === '' && true) ||
                  (touched.password && errors.password)}

                {(values.password === '' && true) ||
                  (!errors.password && (
                    <IconCheck>
                      <SvgIcon id={'icon-check'} />
                    </IconCheck>
                  ))}
              </WrapperInput>
              {values.password === '' && true
                ? null
                : !errors.password &&
                  touched.password !== '' && (
                    <InputCorrect name="Password is secure" />
                  )}
            </PassWrapper>
          </InputWrapper>
          <Btn type="submit">Login</Btn>
          <Text>
            Don't have an account?
            <StyledLink to="/Register">Register</StyledLink>
          </Text>
        </FormContainer>
      )}
    </Formik>
  );
};

export default LoginForm;
