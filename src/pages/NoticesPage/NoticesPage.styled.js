import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import { Link } from 'react-router-dom';
import { colors } from '../../constants/colors';

export const Section = styled.section`
  padding-top: 40px;
  padding-bottom: 117px;

  @media screen and (${devices.tablet}) {
    padding-top: 80px;
    padding-bottom: 209px;
  }
 @media screen and (${devices.desktop}) {
    padding-bottom: 112px;
  }

`;
export const NoticesContainer = styled.div`
  display: flex;
  padding-top: 20px;
  @media screen and (${devices.tablet}) {
    justify-content: space-between;
    padding-top: 40px;
    height: 82px;
  }
`;
export const NoticesSearchContainer = styled.div`
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
    background: rgba(84, 173, 255, 1);
    color: #fff;
  }
`;

export const NoticesNavList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 200px;
  gap: 8px;
  list-style: none;
 
  @media screen and (${devices.tablet}) {
    width: 319px;
   
  }
  @media screen and (${devices.desktop}) {
    width: 100%;
  }
`;

export const NoticesList = styled.div`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 24px 32px;

  @media screen and (${devices.tablet}) {
    grid-template-columns: 24px;
    grid-template-rows: 32px;
    padding: 0;
    list-style-type: none;
    display: flex;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 12px;
  top: 0;
  padding: 10px 0 6px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;

  &:focus,
  &:hover {
    svg{
      transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
      stroke: ${colors.accentColor}
    }
  }
`;

export const NoticesCategoryListWrap = styled.div`
padding: 24px 0 40px;

@media screen and (${devices.tablet}) {
  padding: 40px 0 60px;
}

/* @media screen and (${devices.tablet}) {
  padding: 42px 0 68px;
} */
`;

export const ClearButton = styled(SearchButton)`
right: 40px;
`;