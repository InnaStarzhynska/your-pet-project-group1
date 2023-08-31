import * as yup from 'yup';

const phoneRegExp = /^\+380\d{9}$/;

const birthdayRegExp =
  /^(0[1-9]|1\d|2\d|3[01]).(0[1-9]|1[0-2]).(19[0-9]\d|20[0-6]\d)$/;


export const getValidationSchema = () => {
  return yup.object().shape({
    name: yup.string()
    .required('Required')
    .min(2, 'Name must be at least 2 characters')
    .max(16, 'Name must be no more than 16 characters'),
  email: yup.string().email('Invalid email address').required('Required'),
  birthday: yup
  .string()
  .matches(
    birthdayRegExp,
    'Birthday has invalid date format. The format should be DD.MM.YYYY.'
  )
  .required('Birthday is a required field'),
    phone: yup.string().matches(phoneRegExp, 'Invalid phone number'),
    city: yup.string(),
  });
};
