import { useState } from 'react';

import { Link } from 'react-router-dom';
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {
  Button,
  BtnContainer,
  ErrorWrap,
  FormContainer,
  Input,
  InputContainer,
  InputWrap,
  Title,
} from './LoginForm.styled';
import SvgIcon from 'components/SvgIcon/SvgIcon';



const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valide email')
    .required('Email is required'),
  password: yup.string('Enter your password').required('Password is required'),
});


const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
};



const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  
  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
    resetForm();
      }
   

  // const togglePassword = () => {
  //   setShowPassword(!showPassword);
  // };


  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading)

 
  //   validationSchema: validationSchema,
  //   onSubmit: (values, { resetForm }) => {
  //     dispatch(login(values))
  //     resetForm();
  //   },
  // });

  return (

   <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form autoComplete="off">
          <FormContainer>
            <InputContainer>
              <Title>Login</Title>
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
                  type={setShowPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                >  {showPassword ? <SvgIcon iconName={'icon-eye-open'} /> : <SvgIcon iconName={'icon-eye-closed'} />}</Input>
              </InputWrap>
              {touched.password && !errors.password ? (
                <div>Password is secure</div>
              ) : (
                <ErrorWrap>
                  <ErrorMessage name="password" component="div" />
                </ErrorWrap>
              )}
            </InputContainer>
            <BtnContainer>
              <Button type="submit" disabled={isSubmitting}>
                Login
              </Button>
              <p>
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </BtnContainer>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
};


export default LoginForm;
