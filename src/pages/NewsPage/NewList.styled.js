import { styled } from 'styled-components';
import { devices } from '../../constants/breakpoints';
export const List = styled.ul`
  padding: 24px 0 40px;
  width: 100%;
  gap: 27px;

  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${devices.tablet}) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 24px;
    padding: 40px 0 60px;
  }
  @media screen and (${devices.desktop}) {
    max-width: 1200px;
    padding: 60px 0 68px;
    gap: 30px;
  }
`;
