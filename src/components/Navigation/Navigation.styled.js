import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import { colors } from "../../constants/colors";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media only screen and ${devices.tablet} {
    gap: 24px;
  }

  @media only screen and ${devices.desktop} {
    gap: 329px;
  }
`;

//////////////////// Burger Icon ////////////
export const BurgerIcon = styled.div`
  // display: none;
  flex-direction: column;
  cursor: pointer;

  @media only screen and ${devices.desktop} {
    display: none;
  }
`;

export const Bar = styled.div`
  width: 25px;
  height: 3px;
  margin: 3px 0;
  background-color: ${colors.accentColor};
`;