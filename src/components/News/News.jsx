import React from 'react';
import { NewsContainer, NewsSearch, NewsTitle } from './News.styled';
import SvgIcon from 'components/SvgIcon/SvgIcon';

export default function News() {
  return (
    <NewsContainer>
      <NewsTitle>News</NewsTitle>
      <NewsSearch type="text" name="search" placeholder="Search">
        <SvgIcon id={'icon-search'} className={'svg'} />
      </NewsSearch>
    </NewsContainer>
  );
}
