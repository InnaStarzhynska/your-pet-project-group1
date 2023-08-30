import {
  FormWrapper,
  FormItem,
  FormLabel,
  FormInput,
  InputName,
} from './UserDataItem.styled';

export const UserDataItem = ({ label, name, value, formik, ...props }) => {
  return (
    <FormWrapper>
      <FormItem>
        <InputName>{label}</InputName>
        <FormLabel></FormLabel>
        <FormInput
          autoComplete="off"
          // id={id}
          name={name}
          // on change
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          // active or not
          touched={formik.touched[name] ? formik.touched[name].toString() : ''}
          error={formik.errors[name]}
          {...props}
        />
      </FormItem>
    </FormWrapper>
  );
};

export default UserDataItem;
