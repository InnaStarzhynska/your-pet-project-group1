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
} from './RegisterForm.styled';

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const registrationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be no more than 16 characters'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .matches(passwordRules, { message: 'Please create a stronger password' })
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
              </InputWrap>
              {touched.name && !errors.name ? (
                <div>Name is secure</div>
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
              </InputWrap>
              {touched.email && !errors.email ? (
                <div>Email is secure</div>
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
              </InputWrap>
              {touched.password && !errors.password ? (
                <div>Password is secure</div>
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
              </InputWrap>
              {touched.confirmPassword && !errors.confirmPassword ? (
                <div>Password confirmed</div>
              ) : (
                <ErrorWrap>
                  <ErrorMessage name="confirmPassword" component="div" />
                </ErrorWrap>
              )}
            </InputContainer>
            <BtnContainer>
              <Button type="submit" disabled={isSubmitting}>
                Registration
              </Button>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </BtnContainer>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};

export default RegisterForm;
