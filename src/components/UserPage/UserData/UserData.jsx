import { useRef, useState } from 'react';
import UserDefaultAvatar from '../../../images/Photo_default@2x.jpg';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import {
  ButtonEditUserInfo,
  StyledUserDataForm,
  InputContainer,
  UserInfoContainer,
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
} from '../UserDataForm/UserDataForm.styled';
// import { useDispatch } from 'react-redux';
import { colors } from 'constants/colors';
import { Formik } from 'formik';
import { getValidationSchema } from '../UserDataForm/utils/SchemaValidateUserForm';
import Button from '../Button/Button';

export const UserData = () => {
  // const dispatch = useDispatch();
  const validationSchema = getValidationSchema();
  const [formDisabled, setFormDisabled] = useState(false);
  const imgRef = useRef(null);
  // const submitButtonRef = useRef();
  const [imgUrl, setImgUrl] = useState();
  const [isAvatarUpdated, setIsAvatarUpdated] = useState(false);
  const [errorImg, setErrorImg] = useState('');
  const [setIsAvatarSelected] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleChangeFormStatus = () => {
    setFormDisabled(!formDisabled);
  };

  const user = {
    avatar: 'avatar_url',
    userInfo: {
      name: 'Anna',
      email: 'Anna77@gmail.com',
      birthday: '01-01-1990',
      phone: '+38097-000-00-00',
      city: 'Kyiv',
    },
  };

  const isBirthdayValid = value => {
    if (value === 'Invalid date') {
      value = null;
      return value;
    }
    return value;
  };

  const initialValues = {
    name: user.userInfo.name,
    email: user.userInfo.email,
    birthday: user.userInfo.birthday,
    phone: user.userInfo.phone,
    city: user.userInfo.city,
  };

  const handleAvatarPick = event => {
    imgRef.current.click();
  };

  const handleAvatarPreview = event => {
    setErrorImg('');
    setSelectedAvatar(event.target.files[0]);
    setImgUrl(URL.createObjectURL(event.target.files[0]));
    setIsAvatarUpdated(true);
  };

  const handleAvatarUpload = () => {
    console.log('selected', selectedAvatar);
    if (!selectedAvatar) {
      alert('Please select a file!');
      return;
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

    setIsAvatarUpdated(false);
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
  };
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
                  src={!imgUrl ? UserDefaultAvatar : imgUrl}
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
                accept="image/jpeg, image/jpg, image/png"
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

              {!isBirthdayValid(user.userInfo.birthday) &&
              formDisabled ? null : (
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
              )}

              {!user.userInfo.phone && formDisabled ? null : (
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
              )}

              {!user.userInfo.city && formDisabled ? null : (
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
              )}
              {!formDisabled && (
                <Button
                  style={{
                    marginLeft: 'auto',
                    marginButton: '10px',
                    width: '255px',
                    background: '#54ADFF',
                    color: '#FEF9F9',
                  }}
                  type="submit"
                  $content="Save"
                  $darkType
                />
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
