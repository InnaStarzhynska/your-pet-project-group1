import React from 'react';
import SvgIcon from '../../SvgIcon/SvgIcon';
import {LinkLogOut, BoxLogOut} from "./LogOut.styled";
import { colors } from 'constants/colors';

export default function LogOut({isMenuOpen}) {
  return (
    <BoxLogOut $isopen={isMenuOpen}>
        <LinkLogOut>Log out&nbsp;&nbsp;
        <SvgIcon id={'icon-logout'} color={colors.secondaryTextColor}/>
        </LinkLogOut>
    </BoxLogOut>
  )
}
