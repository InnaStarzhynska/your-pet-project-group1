import LoginForm from "components/LoginForm/LoginForm";
import { Container } from "components/Sharedlayout/Sharedlayout.styled";
import { StyledSection } from "./LoginPage.styled";
import { selectLoadingUser } from "redux/selectors";
import IsLoading from "components/IsLoading/IsLoading";
import { useSelector } from "react-redux";


export default function LoginPage() {
  const isLoading = useSelector(selectLoadingUser);
  return (
    <> 
      {isLoading ? (<IsLoading/>): ( <StyledSection>
      <Container>
        <LoginForm/>
       </Container>
    </StyledSection>)}
    </>
   
    
  )
}
