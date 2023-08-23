import React from 'react';
import { AuthList, AuthLink, AuthItem } from './AuthNav.styled';
import SvgIcon from '../SvgIcon/SvgIcon';
import styled from 'styled-components';

export default function AuthNav() {
  return (
    <AuthList>
      <AuthItem>
        <AuthLink to="/login">
          Log IN&nbsp;&nbsp;
          <SvgIcon id={'icon-pawprint-1'} color={'none'} />
        </AuthLink>
      </AuthItem>
      <AuthItem $register>
        <AuthLink to="/register" $register >
          Registration
        </AuthLink>
      </AuthItem>
    </AuthList>
  );
}
