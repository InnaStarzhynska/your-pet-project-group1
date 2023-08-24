import React from 'react';
// import { useSelector } from 'react-redux';
import {
  Wrapper,
  BoxUser,
  LinkUser,
} from './UserNav.styled';
import LogOut from "./LogOut/LogOut"
import SvgIcon from '../SvgIcon/SvgIcon';
import { colors } from 'constants/colors';

export default function UserNav({isMenuOpen = false}) {
  // const {name, avatar} = useSelector(state => state.auth.user);

  return (
    <Wrapper $isopen={isMenuOpen}>
      <LogOut onClick={() => {}} isMenuOpen={isMenuOpen}/>
      <BoxUser $isopen={isMenuOpen}>
        <SvgIcon id={'icon-user-1'} color={colors.accentColor}/>
        <LinkUser to="user" $isopen={isMenuOpen}>Anna</LinkUser>
      </BoxUser>
    </Wrapper>
  );
}
