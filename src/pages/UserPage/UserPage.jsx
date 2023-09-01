import UserData from '../../components/UserPage/UserData/UserData';
import PetsData from '../../components/UserPage/PetsData/PetsData';
import {
  UserPageContainer,
  UserTitle,
  UserContainer,
  Section,
} from './UserPage.styled';
import Logout from '../../components/UserPage/Logout/Logout';
import { Container } from 'components/Sharedlayout/Sharedlayout.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from 'redux/operations/fetchUser';
import ModalCongrats from 'components/Modals/ModalCongrats/ModalCongrats';
import { statusNewUser } from 'redux/slices/userSlice';

export const UserPage = () => {
  const dispatch = useDispatch();

  const { isNewUser } = useSelector(state => state.user);
  const toggleModal = () => {
    dispatch(statusNewUser(false))
  }


  useEffect(() => {
    dispatch(getUserInfo())
  }, [dispatch])

  return (
    <>
    {isNewUser && <ModalCongrats closeModal={toggleModal}></ModalCongrats>}
        <Section>
          <Container>
            <UserPageContainer>
              <div>
                <UserTitle>My information:</UserTitle>
                <UserContainer>
                  <UserData />
                  <Logout />
                </UserContainer>
              </div>
              <PetsData />
            </UserPageContainer>
          </Container>
        </Section>
      
    </>
  )
}

export default UserPage;
