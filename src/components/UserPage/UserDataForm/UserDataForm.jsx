import { Formik } from 'formik';
import { UserForm,     
    DivLogOut,
    ButtonLogOut,
    } from './UserDataForm.styled';
import fields from './fieldsValidation';
import UserDataItem from '../UserDataItem/UserDataItem';
import SvgIcon from 'components/SvgIcon/SvgIcon';

export const UserDataForm = () => {

    const initialState = {username: '',
        email: '',
        birthday: '',
        phone: '',
        city: '',}

    return (
        <Formik
            enableReinitialize
            initialValues={initialState}
        
        >
            {formik => (
                <UserForm>
                    {Object.entries(fields).map(([name, field]) => (
                        <UserDataItem
                            key={name}
                            value={formik.values[name]}
                            formik={formik}
                            name={name}
                            // onSubmit
                            {...field}
                        />
                    ))}

                    <DivLogOut>
              <ButtonLogOut type="button" aria-label="logout">
                <SvgIcon id = {'icon-logout'} className="icon-logout" />
                Log Out
              </ButtonLogOut>
            </DivLogOut>
                </UserForm>
            )}
        </Formik>
    );
};

export default UserDataForm;