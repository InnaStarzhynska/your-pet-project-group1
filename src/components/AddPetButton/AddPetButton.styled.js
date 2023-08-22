import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

export const AddPetContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const AddPetBtn = styled.a`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-color: #cce4fb;
  color: rgba(65, 158, 241, 1);
  border: none;
  width: 80px;
  height: 80px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  gap: 10px;

  &:hover,
  &:focus {
    background-color: #54adff;
    color: #fff;
  }

  @media screen and (${devices.tablet}) {
    border-radius: 40px;
    flex-direction: row;

    height: auto;
    padding: 8px 15px;
    position: relative;
    text-decoration: none;
    width: 129px;
  }
`;
