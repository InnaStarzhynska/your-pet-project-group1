import React from 'react';
import { AuthList, AuthLink, AuthItem } from './AuthNav.styled';
import SvgIcon from '../SvgIcon/SvgIcon';

export default function AuthNav() {
  return (
      <AuthList>
        <AuthItem>
          <AuthLink to="/login">Log IN</AuthLink>
          <SvgIcon id={"icon-pawprint-1"} color={"none"}/>
        </AuthItem>
        <AuthItem register>
          <AuthLink to="/register" register>Registration</AuthLink>
        </AuthItem>
      </AuthList>
  );
}
