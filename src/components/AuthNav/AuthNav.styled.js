import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { devices } from '../../constants/breakpoints';
import { colors } from '../../constants/colors';

export const AuthList = styled.ul`
  display: flex;
  gap: 12px;
  flex-direction: column;
  margin-bottom: 40px;

  @media only screen and ${devices.tablet} {
    flex-direction: row;
    gap: 20px;
    margin-bottom: 0;
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const AuthItem = styled.li`
  border-radius: 40px;
  cursor: pointer;
  border: ${props =>
    props.register ? `2px solid ${colors.accentColor}` : 'none'};
  background-color: ${props =>
    props.register ? 'transparent' : colors.accentColor};

  @media only screen and ${devices.tablet} {
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const AuthLink = styled(NavLink)`
  width: 165px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 9px;
  padding-bottom: 9px;
  font-weight: ${props => (props.register ? 600 : 700)};
  font-size: 16px;
  line-height: 1.36;
  color: ${props => (props.register ? colors.accentColor : '#fef9f9')};
`;
