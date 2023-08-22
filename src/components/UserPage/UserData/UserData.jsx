import { Formik, Field } from 'formik'; 
import React from 'react';
import {
    UserInfo,
    StylizedForm,
    Avatar,
    ImageControls,
    EditButton,
    // ExitBtn,
} from './UserData.styled';
import avatarDefault2x from '../../../images/Photo_default@2x.jpg';
import UserDataForm from '../UserDataForm/UserDataForm';
import SvgIcon from 'components/SvgIcon/SvgIcon';

export const UserData = () => {
    const initialValues = {
        avatarDefault2x,
    };

    return (
        <UserInfo>
            <Formik initialValues={initialValues}>
                {({ setFieldValue }) => (
                    <StylizedForm>
                        <label>
                            <Avatar src={avatarDefault2x} alt="user avatar" />
                            <Field name="fileInput">
                                {({ field }) => (
                                    <Field
                                        type="file"
                                        id="petPhoto"
                                        name="petPhoto"
                                        accept=".png, .jpg, .jpeg, .webp"
                                        hidden
                                        value=""
                                    />
                                )}
                            </Field>
                            {/* <ExitBtn
                    type="button" >
                            <SvgIcon id = {'icon-cross-small'} className="icon-cross-small" />
                           </ExitBtn> */}
                        </label>
                        <ImageControls>
                            <EditButton type="button">
                            <SvgIcon id = {'icon-camera'} className={'icon-camera'}/>
                                Edit photo
                            </EditButton>
                        </ImageControls>
                    </StylizedForm>
                )}
            </Formik>
            <UserDataForm />
        </UserInfo>
    );
};

export default UserData;