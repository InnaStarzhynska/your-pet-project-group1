import React from 'react';
import { Logo, Wrapper } from './Header.styled';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  return (
    <Wrapper>
      <Link to="/"><Logo/></Link>
      <Navigation />
    </Wrapper>
  );
}
