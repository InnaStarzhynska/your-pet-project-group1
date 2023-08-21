import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Banner,
  Ooops,
  ImageContainer,
  FourLeft,
  OrangeAndCat,
  FourRight,
  Button,
} from './NotFound.styled';
import IconSvg from '../SvgIcon/SvgIcon';

export default function NotFound() {
  const location = useLocation();

  const backLink = useRef(location.state?.from ?? '/');

  return (
    <Container>
      <Banner>
        <Ooops>Ooops!</Ooops> This page not found :(
      </Banner>
      <ImageContainer>
        <FourLeft>4</FourLeft>
        <OrangeAndCat />
        <FourRight>4</FourRight>
      </ImageContainer>
      <Button type="button" to={backLink.current}>
        To main page
        <IconSvg id={'icon-pawprint-1'} />
      </Button>
    </Container>
  );
}
