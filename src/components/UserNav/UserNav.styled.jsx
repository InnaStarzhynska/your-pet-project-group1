import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { devices } from '../../constants/breakpoints';
import { colors } from '../../constants/colors';

export const Wrapper = styled.div`
  margin-bottom: ${props => props.$isopen ? "84px" : "0"};

  @media only screen and ${devices.tablet} {
    display: flex;
    gap: 20px;
    margin-bottom: 0;
  }

  @media only screen and ${devices.desktop} {
    gap: 24px;
  }
`;

export const BoxUser = styled.div`
  display: ${props => props.$isopen ? 'none' : 'flex'};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding-top: 8px;
  padding-bottom: 8px;

  @media only screen and ${devices.tablet} {
    display: ${props => props.isMenuOpen ? 'none' : 'flex'};
  }

  @media only screen and ${devices.desktop} {
  }
`;

export const LinkUser = styled(NavLink)`
  display: ${props => props.$isopen ? 'block' : 'none'};
  font-weight: 500;
  font-size: 16px;
  line-height: 1.36;
  color: ${colors.accentColor};

  @media only screen and ${devices.tablet} {
    display: block;
  }

  @media only screen and ${devices.desktop} {
  }
`;