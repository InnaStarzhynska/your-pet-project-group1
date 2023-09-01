import { styled } from 'styled-components';
import { devices } from '../../constants/breakpoints';
export const List = styled.ul`
  padding: 24px 0 40px;
  width: 100%;
  column-gap: 30px;
  row-gap: 35px;

  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (${devices.tablet}) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 30px;
    row-gap: 35px;
    padding: 40px 0 60px;
  }
  @media screen and (${devices.desktop}) {
    padding: 60px 0 68px;
    column-gap: 30px;
    row-gap: 37px;
  }
`;
