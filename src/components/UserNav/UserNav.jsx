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
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';

export default function UserNav({isMenuOpen = false}) {
  const {name, avatar} = useSelector(selectUser);

  return (
    <Wrapper $isopen={isMenuOpen}>
      <LogOut onClick={() => {}} isMenuOpen={isMenuOpen}/>
      <BoxUser $isopen={isMenuOpen}>
        <SvgIcon id={'icon-user-1'} color={colors.accentColor}/>
        <LinkUser to="user" $isopen={isMenuOpen}>{name}</LinkUser>
      </BoxUser>
    </Wrapper>
  );
}
