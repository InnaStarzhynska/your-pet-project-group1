import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import { Link } from 'react-router-dom';

export const AddPetContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const AddPetBtn = styled(Link)`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

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
    background: linear-gradient(290.46deg, #9bd0ff 0%, #419ef1 107.89%);
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
