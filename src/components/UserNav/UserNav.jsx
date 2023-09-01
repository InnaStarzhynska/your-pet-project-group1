import React from 'react';
// import { useSelector } from 'react-redux';
import {
  Wrapper,
  BoxUser,
  BoxAvatar,
  ImgAvatar,
  LinkUser,
} from './UserNav.styled';
import LogOut from "./LogOut/LogOut"
import SvgIcon from '../SvgIcon/SvgIcon';
import { colors } from 'constants/colors';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selectors';

export default function UserNav({isMenuOpen = false, closeMenu}) {
  const {name, avatar} = useSelector(selectUser);

  return (
    <Wrapper $isopen={isMenuOpen}>
      <LogOut closeMenu={closeMenu} isMenuOpen={isMenuOpen}/>
      <BoxUser $isopen={isMenuOpen} onClick={() => closeMenu()}>
        {avatar ? <BoxAvatar><ImgAvatar src={avatar} alt="avatar" /></BoxAvatar> : <SvgIcon id={'icon-user-1'} color={colors.accentColor}/>}
        <LinkUser to="user" $isopen={isMenuOpen}>{name}</LinkUser>
      </BoxUser>
    </Wrapper>
  );
}
