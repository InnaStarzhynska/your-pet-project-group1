import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Banner,
  Span,
  ImageContainer,
  Button,
} from './NotFound.styled';
import IconSvg from '../SvgIcon/SvgIcon';

export default function NotFound() {
  const location = useLocation();

  const backLink = useRef(location.state ?? '/');

  return (
    <Container>
      <Banner>
        <Span>Ooops!</Span> This page not found :(
      </Banner>
      <ImageContainer></ImageContainer>
      <Button type="button" to={backLink.current}>
        To main page
        <IconSvg id={'icon-pawprint-1'} />
      </Button>
    </Container>
  );
}
