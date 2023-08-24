import RegisterForm from "components/RegisterForm/RegisterForm";
import { Container } from "components/Sharedlayout/Sharedlayout.styled";
import { StyledSection } from "./RegisterPage.styled";


export default function RegisterPage() {
  return (
    <StyledSection>
<Container>
   <RegisterForm/>
   </Container>
   </StyledSection>
  )
}
