import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const Img = styled.img`
  margin-left: 20px;

  @media screen and ${devices.tablet} {
    margin: auto;
    margin-top: 20px;
  }

  @media screen and ${devices.desktop} {
    margin: auto;
    margin-top: 60px;
  }
`;
