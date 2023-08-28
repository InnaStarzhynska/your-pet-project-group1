import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { devices } from '../../../constants/breakpoints';
import { colors } from '../../../constants/colors';

export const BoxLogOut = styled.div`
  display: ${props => (props.$isopen ? 'flex' : 'none')};
  position: absolute;
  bottom: 20px;
  left: 20px;
  border-radius: 40px;
  border: none;
  background-color: ${colors.blueColor};

  @media only screen and ${devices.tablet} {
    position: static;
  }

  @media only screen and ${devices.desktop} {
    display: ${props => (props.$isopen ? 'none' : 'flex')};
  }
`;

export const LinkLogOut = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  padding-top: 9px;
  padding-bottom: 9px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.36;
  color: ${colors.secondaryTextColor};
  cursor: pointer;
`;
