import styled from 'styled-components';
import { devices } from 'constants/breakpoints';

export const Container = styled.div`
  width: 320px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media screen and (${devices.tablet}) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (${devices.desktop}) {
    width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
