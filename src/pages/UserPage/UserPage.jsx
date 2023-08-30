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
import { selectLoadingUser } from 'redux/selectors';
import IsLoading from 'components/IsLoading/IsLoading';

export const UserPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingUser);

  useEffect(() => {
    
  }, [dispatch])

  return (
    <>
      {isLoading ? (
        <IsLoading />
      ) : (
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
      )
      }
    </>
  )
}

export default UserPage;
