import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
export const NewsContainer = styled.div`
  padding-top: 40px;
  text-align: center;
  display: flex;
  flex-direction: column;

  justify-content: center;

  @media screen and (${devices.tablet}) {
    padding-top: 80px;
  }
`;
export const NewsTitle = styled.h2`
  margin-bottom: 24px;
  font-size: 24px;
  line-height: 32.78px;

  @media screen and (${devices.tablet}) {
    line-height: 66px;
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 40px;
  }
`;
export const NewsSearchForm = styled.form`
  position: relative;
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 44px;
  @media screen and (${devices.tablet}) {
    width: 608px;
    margin-bottom: 62px;
  }
  @media screen and (${devices.desktop}) {
    margin-bottom: 80px;
  }
`;
export const NewsSearch = styled.input`
  width: 100%;
  padding: 14px 36px 13px 20px;
  border-radius: 24px;
  border: none;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  @media screen and (${devices.tablet}) {
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  @media screen and (${devices.desktop}) {
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 12px;
  top: 0;
  padding: 10px 0 6px;
  background-color: transparent;
  border-color: transparent
`
