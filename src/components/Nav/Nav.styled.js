import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { devices } from '../../constants/breakpoints';
import { colors } from '../../constants/colors';

export const MenuList = styled.ul`
  display: ${props => (props.isMenuOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media only screen and ${devices.tablet} {
    gap: 60px;
  }

  @media only screen and ${devices.desktop} {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }
`;

export const MenuItem = styled.li`
  cursor: pointer;
`;

export const MainNavLink = styled(NavLink)`
  font-weight: 500;
  font-size: 32px;
  line-height: 1.37;
  color: ${colors.textColor};

  &:hover,
  &:focus {
    color: ${colors.accentColor};
  }

  @media only screen and ${devices.tablet} {
    font-size: 48px;
  }

  @media only screen and ${devices.desktop} {
    font-size: 20px;
  }
`;




// export const MenuList = styled.ul`
//   display: ${props => (props.isMenuOpen ? 'flex' : 'none')};
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   gap: 20px;

//   @media only screen and ${devices.tablet} {
//     gap: 60px;
//   }

//   @media only screen and ${devices.desktop} {
//     display: flex;
//     flex-direction: row;
//     gap: 40px;
//   }
// `;

// export const MenuItem = styled.li`
//   cursor: pointer;
// `;

// export const MainNavLink = styled(NavLink)`
//   font-weight: 500;
//   font-size: 32px;
//   line-height: 1.37;
//   color: ${colors.textColor};

//   &:hover,
//   &:focus {
//     color: ${colors.accentColor};
//   }

//   @media only screen and ${devices.tablet} {
//     font-size: 48px;
//   }

//   @media only screen and ${devices.desktop} {
//     font-size: 20px;
//   }
// `;