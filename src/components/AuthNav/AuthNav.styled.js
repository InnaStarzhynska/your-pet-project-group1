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
    props.$register ? `2px solid ${colors.accentColor}` : 'none'};
  background: ${props =>
    props.$register ? 'transparent' : colors.accentColor};
    box-shadow: none;
    // transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${colors.accentColor};
    // box-shadow: 0 10px 10px -5px rgba(255, 193, 7, 1);
    transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
    background: ${props => props.$register ? "linear-gradient(to right, #FDF7F2, #FFF5DB)" : "linear-gradient(to left, #FFC107, #FFD54F)"}
  }

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
  font-weight: ${props => (props.$register ? 600 : 700)};
  font-size: 16px;
  line-height: 1.36;
  color: ${props => (props.$register ? colors.accentColor : '#fef9f9')};
`;
