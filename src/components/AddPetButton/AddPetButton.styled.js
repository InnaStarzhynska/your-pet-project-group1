import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import { Link } from 'react-router-dom';

export const AddPetContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  position: relative;
`;

export const AddPetBtn = styled(Link)`
  position: absolute;
  top: 160px;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-color: rgb(84, 173, 255);
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
    background: linear-gradient(290.46deg, #9bd0ff 0%, #419ef1 107.89%);
    color: #fff;
  }

  @media screen and (${devices.tablet}) {
    border-radius: 40px;
    flex-direction: row;
    top: 0;
    height: auto;
    padding-top: 9px;
    padding-bottom: 9px;
    position: relative;
    text-decoration: none;
    width: 129px;
  }
`;
