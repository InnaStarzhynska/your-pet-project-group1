import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Section, Banner, Span, Image, Button } from './NotFound.styled';
import IconSvg from '../SvgIcon/SvgIcon';

export default function NotFound() {
  const location = useLocation();

  const backLink = useRef(location.state ?? '/');

  return (
    <Section>
      <Banner>
        <Span>Ooops!</Span> This page not found :(
      </Banner>
      <Image />
      <Button type="button" to={backLink.current}>
        To main page
        <IconSvg id={'icon-pawprint-1'} />
      </Button>
    </Section>
  );
}
