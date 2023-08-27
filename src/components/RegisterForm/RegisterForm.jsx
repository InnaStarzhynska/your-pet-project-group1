import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {registerUser} from '../../redux/operations';


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
  PasswordComnfirIcon,
  PasswordCrossIcon,
  } from './RegisterForm.styled';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { colors } from 'constants/colors';



const registrationValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be no more than 16 characters'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
  .min(6, 'Password must be at least 6 characters')
  .max(16, 'Password must be no more than 16 characters')
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
    'Please create a stronger password'
  )
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

  const dispatch = useDispatch();

  
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passworConfirmdVisible, setPasswordConfirmVisible] = useState(false);

  const handleSubmit = ({name, email, password}, { resetForm }) => {
    dispatch(
      registerUser({
        name: name,
        email: email, 
        password: password,
      })
    );
    resetForm();
  };

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
      {({ isSubmitting, errors, touched, values, setFieldValue }) => (
        <Form autoComplete="off">
          <FormContainer>
            <InputContainer>
              <Title>Registration</Title>
              <InputWrap  >
                <label htmlFor="name" hidden>
                  Name
                </label>
                <Input id="name" type="name" name="name" placeholder="Name" className={`${"defoult"}
${touched.name && !errors.name  && "success"}
                  ${touched.name && errors.name && "error"}`}
                
/>
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
                  className={`${"defoult"}
${touched.email && !errors.email  && "success"}
                  ${touched.email && errors.email && "error"}`}
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
                  className={`${"defoult"}
                  ${touched.password && !errors.password  && "success"}
                                    ${touched.password && errors.password && "error"}`}
                
                />
                 {touched.password && isFieldValid(errors, 'password') && (
                  <PasswordComnfirIcon>
                    <SvgIcon
                      id="icon-check"
                      color={colors.greenStepSuccessColor}
                    />
                  </PasswordComnfirIcon>)}
                  {touched.password && hasFieldError(errors, 'password') && (
                  <PasswordCrossIcon
                    type="button"
                    onClick={() => clearInput('password', setFieldValue)}
                  >
                    <SvgIcon
                      id={'icon-cross-small'}
                      color={colors.redErrorColor}
                    />
                  </PasswordCrossIcon>
                )}
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
                  className={`${"defoult"}
                  ${touched.confirmPassword && !errors.confirmPassword  && "success"}
                                    ${touched.confirmPassword && errors.confirmPassword && "error"}`}
                />
                {touched.confirmPassword && isFieldValid(errors, 'confirmPassword') && (
                  <PasswordComnfirIcon>
                    <SvgIcon
                      id="icon-check"
                      color={colors.greenStepSuccessColor}
                    />
                  </PasswordComnfirIcon>)}
                  {touched.confirmPassword && hasFieldError(errors, 'confirmPassword') && (
                  <PasswordCrossIcon
                    type="button"
                    onClick={() => clearInput('confirmPassword', setFieldValue)}
                  >
                    <SvgIcon
                      id={'icon-cross-small'}
                      color={colors.redErrorColor}
                    />
                  </PasswordCrossIcon>
                )}
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
