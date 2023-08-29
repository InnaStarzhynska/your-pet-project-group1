import { Container } from 'components/Sharedlayout/Sharedlayout.styled';
import NoticesCategoriesList from './NoticesCategoriesList';
import NoticesCategoriesNav from './NoticesCategoriesNav';
import NoticesSearch from './NoticesSearch';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import { NoticesContainer, Section, NoticesCategoryListWrap } from './NoticesPage.styled';
import Pagination from 'components/Pagination/Pagination';
import { Outlet, useParams, useSearchParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNoticesByQuery } from 'redux/operations/fetchNotices';
import { selectLoadingNotices } from 'redux/selectors';
import IsLoading from 'components/IsLoading/IsLoading';

export default function NoticesPage() {
  const dispatch = useDispatch();
  const { categoryName: category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page') ?? 1);
  const query = searchParams.get('query') ?? '';
  const isLoading = useSelector(selectLoadingNotices);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setIsMobile(windowWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    dispatch(getNoticesByQuery({ category, query, page }))
  }, [dispatch, category, query, page]);



  const changePage = (e) => {
    const page = e.target.textContent;
    setSearchParams({ query, page })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target.search.value.trim();
    setSearchParams({ query, page });
  }

  return (
    <>
      {isLoading ? (<IsLoading isOpen={isLoading} />) :
        (<Section>
          <Container>
            <NoticesSearch handleSubmit={handleSubmit} value={query} />
            <NoticesContainer>
              <NoticesCategoriesNav />
              {!isMobile && <AddPetButton />}
            </NoticesContainer>
 <NoticesCategoryListWrap>
            <NoticesCategoriesList />
          </NoticesCategoryListWrap>
            <Outlet />
            <Pagination changePage={changePage} currentPage={page} />
          </Container>
        </Section>)}
      </>
  );
}
