import React from 'react';
import { Logo, Wrapper } from './Header.styled';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import { Container } from 'components/Sharedlayout/Sharedlayout.styled';

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Navigation />
      </Wrapper>
    </Container>
  );
}
