import { styled } from 'styled-components';
import { devices } from '../../constants/breakpoints';
export const List = styled.ul`
  width: 100%;
  gap: 44px;

  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${devices.tablet}) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 24px;
  }
  @media screen and (${devices.desktop}) {
    max-width: 1200px;
  }
`;
