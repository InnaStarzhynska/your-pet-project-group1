import React, { useEffect } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { NewsList } from './NewsList';
import {
  NewsContainer,
  NewsSearch,
  NewsSearchForm,
  NewsTitle,
  SearchButton,
} from './NewsPage.styled';
import { Container } from 'components/Sharedlayout/Sharedlayout.styled';
import { selectLoadingNews } from 'redux/selectors';
import IsLoading from 'components/IsLoading/IsLoading';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsByQuery } from 'redux/operations/fetchNews';
import { useSearchParams } from 'react-router-dom';
import Pagination from 'components/Pagination/Pagination';

export default function NewsPage() {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') ?? 1);
  const query = searchParams.get('query') ?? '';
  const isLoading = useSelector(selectLoadingNews);

  useEffect(() => {
    dispatch(getNewsByQuery({ query, page }))
  }, [dispatch, query, page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    setSearchParams({ query, page });
  };

  const changePage = (e) => {
    const page = e.target.textContent;
    setSearchParams({ query, page })
  }

  return (
    <>
    {isLoading ? (<IsLoading/>) : ( <Container>
      <NewsContainer>
        <NewsTitle>News</NewsTitle>
       <NewsSearch handleSubmit={handleSubmit} value={query}/>
        <NewsList />
        </NewsContainer>
        <Pagination changePage={changePage} currentPage={page} />
    </Container>
  )}</>
  )
}
