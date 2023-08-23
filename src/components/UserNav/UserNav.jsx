import React from 'react';
import {
  Wrapper,
  BoxUser,
  LinkUser,
} from './UserNav.styled';
import LogOut from "./LogOut/LogOut"
import SvgIcon from '../SvgIcon/SvgIcon';
import { colors } from 'constants/colors';

export default function UserNav({isMenuOpen = false}) {
  return (
    <Wrapper isMenuOpen={isMenuOpen}>
      <LogOut onClick={() => {}} isMenuOpen={isMenuOpen}/>
      <BoxUser isMenuOpen={isMenuOpen}>
        <SvgIcon id={'icon-user-1'} color={colors.accentColor}/>
        <LinkUser to="user" isMenuOpen={isMenuOpen}>Anna</LinkUser>
      </BoxUser>
    </Wrapper>
  );
}
