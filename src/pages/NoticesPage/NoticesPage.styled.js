import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import { Link } from 'react-router-dom';
export const NoticesContainer = styled.div`
  padding-top: 88px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoticesTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  margin-bottom: 24px;
  text-align: center;
  color: #111111;
  @media screen and (${devices.tablet}) {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 65.57px;
  }
  @media screen and (${devices.desktop}) {
  }
`;
export const SearchForm = styled.form`
  position: relative;
  width: 280px;

  @media screen and (${devices.tablet}) {
    width: 608px;
  }
`;

export const Search = styled.input`
  width: 100%;
  border: none;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 24px;
  padding-top: 14px;
  padding-bottom: 13px;
  padding-left: 20px;

  @media screen and (${devices.tablet}) {
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  @media screen and (${devices.desktop}) {
  }
`;

export const NoticesNavbtn = styled(Link)`
  background-color: #cce4fb;
  color: #54adff;
  border: none;
  border-radius: 40px;
  padding: 8px 16px;
  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #9bd0ff 0%, #419ef1 107.89%);
    color: #fff;
  }
  @media screen and (${devices.tablet}) {
  }
  @media screen and (${devices.desktop}) {
  }
`;

export const NoticesNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  gap: 8px;
  list-style: none;
  margin-top: 20px;
  @media screen and (${devices.tablet}) {
    width: 319px;
    margin-top: 40px;
  }
  @media screen and (${devices.desktop}) {
    width: 100%;
  }
`;

export const NoticesList = styled.div`
  list-style-type: none;
  display: flex;

  @media screen and (${devices.tablet}) {
    flex-wrap: wrap;
    gap: 20px;
    padding: 0;
    list-style-type: none;
    display: flex;
  }
`;
