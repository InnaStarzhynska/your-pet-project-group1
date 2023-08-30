import { useRef, useState } from 'react';
import UserDefaultAvatar from '../../../images/Photo_default@2x.jpg';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import {
  ButtonEditUserInfo,
  StyledUserDataForm,
  InputContainer,
  UserInfoContainer,
  SaveProfile,
  SaveProfileWrapper,
} from './UserData.styled';
import {
  AvatarContainer,
  ButtonCancelUpload,
  ButtonEditPhoto,
  ButtonUpload,
  ContainerButtonsUpload,
  ErrorMessageContainer,
  StyledErrorImg,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  StyledInputMask,
  StyledLabel,
  UserAvatar,
  UserAvatarThumb,
} from './UserDataForm.styled';

import { colors } from 'constants/colors';
import { Formik } from 'formik';
import { getValidationSchema } from './utils/SchemaValidateUserForm';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';
import { updateUserInfo } from 'redux/operations/fetchUser';

export const UserData = () => {
  const validationSchema = getValidationSchema();
  const [formDisabled, setFormDisabled] = useState(true);
  const imgRef = useRef(null);
  const [imgUrl, setImgUrl] = useState();
  const [isAvatarUpdated, setIsAvatarUpdated] = useState(false);
  const [errorImg, setErrorImg] = useState('');
  const [isAvatarSelected, setIsAvatarSelected] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [file, setFile] = useState('');
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleChangeFormStatus = () => {
    setFormDisabled(!formDisabled);
  };

  const initialValues = {
    name: user.name,
    email: user.email,
    birthday: user.birthday ?? new Date().toLocaleDateString(),
    phone: user.phone,
    city: user.city,
    avatar: user.avatar
  };

  const handleAvatarPick = () => {
    imgRef.current.click();
  };

  const handleAvatarPreview = event => {
    setErrorImg('');
    if (event.target.files[0]) {
      setSelectedAvatar(event.target.files[0]);
      setImgUrl(URL.createObjectURL(event.target.files[0]));
      setIsAvatarUpdated(true);
    }
  };

  const handleAvatarUpload = () => {
    console.log('selected', selectedAvatar);
    if (!selectedAvatar) {
      Notiflix.Notify.failure('Please select a file!');
    }
    if (selectedAvatar?.size > 3145728) {
      setErrorImg('Image is too big please select image below 3 MB');
      return;
    }
    setIsAvatarSelected(true);
    setIsAvatarUpdated(false);
  };

  const cancelAvatarUpload = () => {
    setImgUrl('');
    setFile('');
    setIsAvatarUpdated(false);
  };

  const handleSubmit = (values, { resetForm }) => {
    const updateValues = { ...values, birthday: values.birthday.replaceAll("-", '.'), avatar: selectedAvatar };
    const updateInfo = new FormData();
    for (const [key, value] of Object.entries(updateValues)) {
      updateInfo.append(key, value)
    }
    dispatch(updateUserInfo(updateInfo));
    resetForm()
  }
  return (
    <>
      <StyledUserDataForm>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <StyledForm autoComplete="off">
            <AvatarContainer>
              <UserAvatarThumb>
                <UserAvatar
                  src={imgUrl ? imgUrl : user.avatar}
                  width="182"
                  height="182"
                  alt="User avatar"
                />
              </UserAvatarThumb>

              {errorImg && <StyledErrorImg> {errorImg}</StyledErrorImg>}

              {formDisabled ? (
                <div
                  style={{
                    height: '0px',
                  }}
                ></div>
              ) : !isAvatarUpdated ? (
                <ButtonEditPhoto type="button" onClick={handleAvatarPick}>
                  <SvgIcon id={'icon-camera'} />
                  Edit photo
                </ButtonEditPhoto>
              ) : (
                <ContainerButtonsUpload>
                  <ButtonUpload type="button" onClick={handleAvatarUpload}>
                    <SvgIcon id={'icon-check'} />
                  </ButtonUpload>
                  <p>Confirm</p>
                  <ButtonCancelUpload
                    type="button"
                    onClick={cancelAvatarUpload}
                  >
                    <SvgIcon
                      id={'icon-cross-small'}
                      color={colors.redErrorColor}
                    />
                  </ButtonCancelUpload>
                </ContainerButtonsUpload>
              )}

              <input
                id="file"
                name="file"
                type="file"
                ref={imgRef}
                accept="image/*"
                onChange={handleAvatarPreview}
                hidden
              />
            </AvatarContainer>

            <UserInfoContainer>
              <InputContainer>
                <StyledLabel htmlFor="name">Name:</StyledLabel>
                <ErrorMessageContainer>
                  <StyledInput
                    name="name"
                    type="text"
                    disabled={formDisabled}
                  />
                  <StyledErrorMessage component="div" name="name" />
                </ErrorMessageContainer>
              </InputContainer>
              <InputContainer>
                <StyledLabel htmlFor="email">Email:</StyledLabel>
                <ErrorMessageContainer>
                  <StyledInput
                    name="email"
                    type="email"
                    disabled={formDisabled}
                  />
                  <StyledErrorMessage component="div" name="email" />
                </ErrorMessageContainer>
              </InputContainer>

              <StyledInput name="birthday">
                {({ field }) => (
                  <InputContainer>
                    <StyledLabel htmlFor="birthday">Birthday:</StyledLabel>
                    <ErrorMessageContainer>
                      <StyledInputMask
                        {...field}
                        mask="99-99-9999"
                        maskplaceholder="11-11-1970"
                        type="text"
                        disabled={formDisabled}
                      />
                      <StyledErrorMessage component="div" name="birthday" />
                    </ErrorMessageContainer>
                  </InputContainer>
                )}
              </StyledInput>

              <InputContainer>
                <StyledLabel htmlFor="phone">Phone:</StyledLabel>
                <ErrorMessageContainer>
                  <StyledInput
                    name="phone"
                    type="tel"
                    disabled={formDisabled}
                    placeholder="+380000000000"
                  />
                  <StyledErrorMessage component="div" name="phone" />
                </ErrorMessageContainer>
              </InputContainer>

              <InputContainer>
                <StyledLabel htmlFor="city">City:</StyledLabel>
                <ErrorMessageContainer>
                  <StyledInput
                    name="city"
                    type="text"
                    disabled={formDisabled}
                    placeholder="City"
                  />
                  <StyledErrorMessage component="p" name="city" />
                </ErrorMessageContainer>
              </InputContainer>
              {!formDisabled && (
                <SaveProfileWrapper>
                  <SaveProfile type="submit">Save</SaveProfile>
                </SaveProfileWrapper>
              )}
            </UserInfoContainer>
          </StyledForm>
        </Formik>

        <ButtonEditUserInfo type="button" onClick={handleChangeFormStatus}>
          <SvgIcon id={'icon-edit-2'} />
        </ButtonEditUserInfo>
      </StyledUserDataForm>
    </>
  );
};

export default UserData;
