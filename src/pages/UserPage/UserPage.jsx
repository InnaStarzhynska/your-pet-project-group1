import UserData from '../../components/UserPage/UserData/UserData';
import PetsData from '../../components/UserPage/PetsData/PetsData';
import {
    UserPageWrapper,
    MainContent,
    TitleWrap,
    Title,
    Card,
} from './UserPage.styled';

export const UserPage = () => {
    return (
        <UserPageWrapper>
            <MainContent>
                <div>
                    <TitleWrap>
                        <Title>My information:</Title>
                    </TitleWrap>
                    <Card>
                        <UserData/>
                    </Card>
                </div>
                <div style={{ position: 'relative', width: '100%' }}>
                  <PetsData />
                </div>
            </MainContent>
        </UserPageWrapper>
    );
};

export default UserPage;
