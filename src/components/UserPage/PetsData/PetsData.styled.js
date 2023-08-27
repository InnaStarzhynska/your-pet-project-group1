import styled from 'styled-components';

export const PetsTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: #000000;
  @media screen and (min-width: 767px) {
    font-size: 28px;
    letter-spacing: 0em;
    color: #111111;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const PetsHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 767px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const PetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 280px;
  @media screen and (min-width: 767px) {
    width: 704px;
    gap: 20px;
  }
  $@media screen and (min-width: 1280px) {
    width: 821px;
    gap: 24px;
  }
`;
