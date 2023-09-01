import LoginForm from "components/LoginForm/LoginForm";
import { Container } from "components/Sharedlayout/Sharedlayout.styled";
import { StyledSection } from "./LoginPage.styled";

export default function LoginPage() {

  return (
    <> 
       <StyledSection>
      <Container>
        <LoginForm/>
       </Container>
    </StyledSection>
    </>
   
    
  )
}
