import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
  ConfirmIcon,
  StyledLink,
  ConfirmMessage,
} from './RegisterForm.styled';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { colors } from 'constants/colors';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;

const registrationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be no more than 16 characters'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .matches(passwordRules, {
      message:
        'Password must contain 6 - 16 characters with at least one of each: uppercase, lowercase, number',
    })
    .required('Required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passworConfirmdVisible, setPasswordConfirmVisible] = useState(false);

  const handleClickPasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleClickPasswordConfirmVisibility = () => {
    setPasswordConfirmVisible(!passworConfirmdVisible);
  };

  const clearInput = (fieldName, setFieldValue) => {
    setFieldValue(fieldName, '');
  };

  const hasFieldError = (errors, fieldName) => errors[fieldName];
  const isFieldValid = (errors, fieldName) => !errors[fieldName];

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={registrationValidationSchema}
    >
      {({ isSubmitting, errors, touched, setFieldValue }) => (
        <Form autoComplete="off">
          <FormContainer>
            <InputContainer>
              <Title>Registration</Title>
              <InputWrap>
                <label htmlFor="name" hidden>
                  Name
                </label>
                <Input id="name" type="name" name="name" placeholder="Name" />
                {touched.name && hasFieldError(errors, 'name') && (
                  <CrossIcon
                    type="button"
                    onClick={() => clearInput('name', setFieldValue)}
                  >
                    <SvgIcon
                      id={'icon-cross-small'}
                      color={colors.redErrorColor}
                    />
                  </CrossIcon>
                )}
                {touched.name && isFieldValid(errors, 'name') && (
                  <ConfirmIcon>
                    <SvgIcon
                      id="icon-check"
                      color={colors.greenStepSuccessColor}
                    />
                  </ConfirmIcon>
                )}
              </InputWrap>
              {touched.name && !errors.name ? (
                <ConfirmMessage>Name is secure</ConfirmMessage>
              ) : (
                <ErrorWrap>
                  <ErrorMessage name="name" component="div" />
                </ErrorWrap>
              )}
              <InputWrap>
                <label htmlFor="email" hidden>
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
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
                  <ConfirmIcon>
                    <SvgIcon
                      id="icon-check"
                      color={colors.greenStepSuccessColor}
                    />
                  </ConfirmIcon>
                )}
              </InputWrap>
              {touched.email && !errors.email ? (
                <ConfirmMessage>Email is secure</ConfirmMessage>
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
                  type={passwordVisible ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                />
                {passwordVisible ? (
                  <IconBtn
                    type="button"
                    onClick={handleClickPasswordVisibility}
                  >
                    <SvgIcon id={'icon-eye-open'} />
                  </IconBtn>
                ) : (
                  <IconBtn
                    type="button"
                    onClick={handleClickPasswordVisibility}
                  >
                    <SvgIcon id={'icon-eye-closed'} />
                  </IconBtn>
                )}
              </InputWrap>
              {touched.password && !errors.password ? (
                <ConfirmMessage>Password is secure</ConfirmMessage>
              ) : (
                <ErrorWrap>
                  <ErrorMessage name="password" component="div" />
                </ErrorWrap>
              )}
              <InputWrap>
                <label htmlFor="confirmPassword" hidden>
                  Confirm password
                </label>
                <Input
                  id="confirmPassword"
                  type={passworConfirmdVisible ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Confirm password"
                />
                {passworConfirmdVisible ? (
                  <IconBtn
                    type="button"
                    onClick={handleClickPasswordConfirmVisibility}
                  >
                    <SvgIcon id={'icon-eye-open'} />
                  </IconBtn>
                ) : (
                  <IconBtn
                    type="button"
                    onClick={handleClickPasswordConfirmVisibility}
                  >
                    <SvgIcon id={'icon-eye-closed'} />
                  </IconBtn>
                )}
                {touched.confirmPassword && !errors.confirmPassword ? (
                  <ConfirmMessage>Password confirmed</ConfirmMessage>
                ) : (
                  <ErrorWrap>
                    <ErrorMessage name="confirmPassword" component="div" />
                  </ErrorWrap>
                )}
              </InputWrap>
            </InputContainer>
            <BtnContainer>
              <Button type="submit" disabled={isSubmitting}>
                Registration
              </Button>
              <p>
                Already have an account?{' '}
                <StyledLink to="/login">Login</StyledLink>
              </p>
            </BtnContainer>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
