import React from 'react';
import SvgIcon from '../../SvgIcon/SvgIcon';
import {LinkLogOut, BoxLogOut} from "./LogOut.styled";
import { colors } from 'constants/colors';

export default function LogOut({isMenuOpen}) {
  return (
    <BoxLogOut isMenuOpen={isMenuOpen}>
        <LinkLogOut>Log out</LinkLogOut>
        <SvgIcon id={'icon-logout'} color={colors.secondaryTextColor}/>
    </BoxLogOut>
  )
}
