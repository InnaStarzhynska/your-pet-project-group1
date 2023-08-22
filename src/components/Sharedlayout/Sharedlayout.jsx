import  Header from "components/Header/Header";
import { Outlet } from "react-router";
import { Container } from "./Sharedlayout.styled";


export default function Sharedlayout() {
  return (
      <Container>
          <Header/>
          <Outlet/>
    </Container>
  )
}
