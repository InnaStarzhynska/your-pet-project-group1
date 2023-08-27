import React from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { NewsList } from './NewsList';
import {
  NewsContainer,
  NewsSearch,
  NewsSearchForm,
  NewsTitle,
} from './NewsPage.styled';
import { Container } from 'components/Sharedlayout/Sharedlayout.styled';

export default function NewsPage() {
  return (
    <Container>
      <NewsContainer>
        <NewsTitle>News</NewsTitle>
        <NewsSearchForm>
          <NewsSearch type="text" name="search" placeholder="Search" />
          <SvgIcon id={'icon-search'} className={'svg'} />
        </NewsSearchForm>

        <NewsList />
      </NewsContainer>
    </Container>
  );
}
