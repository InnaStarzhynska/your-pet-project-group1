import React from 'react';
import { MenuList, MenuItem, MainNavLink } from './Nav.styled';

export default function Nav({isMenuOpen = false}) {
  return (
    <MenuList $isMenuOpen={isMenuOpen}>
      <MenuItem>
        <MainNavLink to="/news">News</MainNavLink>
      </MenuItem>
      <MenuItem>
        <MainNavLink to="/notices">Find pet</MainNavLink>
      </MenuItem>
      <MenuItem>
        <MainNavLink to="/friends">Our friends</MainNavLink>
      </MenuItem>
    </MenuList>
  );
}
