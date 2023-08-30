import React from 'react';
import { MenuList, MenuItem, MainNavLink } from './Nav.styled';

export default function Nav({closeMenu, isMenuOpen = false}) {
  return (
    <MenuList $isMenuOpen={isMenuOpen}>
      <MenuItem >
        <MainNavLink to="/news" onClick={() => closeMenu()}>News</MainNavLink>
      </MenuItem>
      <MenuItem>
        <MainNavLink to="/notices" onClick={() => closeMenu()}>Find pet</MainNavLink>
      </MenuItem>
      <MenuItem>
        <MainNavLink to="/friends" onClick={() => closeMenu()}>Our friends</MainNavLink>
      </MenuItem>
    </MenuList>
  );
}
