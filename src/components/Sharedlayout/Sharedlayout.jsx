import AuthNav from "components/AuthNav/AuthNav";
import  Header from "components/Header/Header";
import Navigation from "components/Navigation/Navigation";
import UserNav from "components/UserNav/UserNav";
import { Outlet } from "react-router";
import { Container } from "./Sharedlayout.styled";


export default function Sharedlayout() {
  return (
      <Container>
          <Header>
              <Navigation />
              <AuthNav />
              <UserNav/>
          </Header>
          <Outlet/>
    </Container>
  )
}
