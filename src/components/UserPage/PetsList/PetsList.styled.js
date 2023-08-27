import styled from 'styled-components';

export const PetsCardContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 767px) {
  }
  '@media screen and (min-width: 1280px) {
    gap: 24px;
  }
`;