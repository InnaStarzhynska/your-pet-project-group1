import UserData from '../../components/UserPage/UserData/UserData';
import PetsData from '../../components/UserPage/PetsData/PetsData';
import {
  UserPageWrapper,
  UserPageContainer,
  UserTitle,
  UserContainer,
} from './UserPage.styled';
import Logout from '../../components/UserPage/Logout/Logout';
import { Container } from 'components/Sharedlayout/Sharedlayout.styled';

export const UserPage = () => {
  return (
    <Container>
      <UserPageWrapper>
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
      </UserPageWrapper>
    </Container>
  );
};

export default UserPage;
