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

export const UserPage = () => {
  return (
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
  );
};

export default UserPage;
