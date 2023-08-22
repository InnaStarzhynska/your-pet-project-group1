import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import { colors } from '../../constants/colors';


export const BurgerMenuContainer = styled.div`
  position: fixed;
  z-index: -10;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-105%')};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 82px;
  background-color: ${colors.whiteColor};
  transition: right 0.3s ease-in-out;

  @media only screen and ${devices.tablet} {
    padding-top: 160px;
  }

  @media only screen and ${devices.desktop} {
    display: none;
  }
`;


