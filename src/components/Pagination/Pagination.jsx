import SvgIcon from "components/SvgIcon/SvgIcon";
import { Button, PaginationContainer, Wrapper } from "./Pagination.styled";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectNoticesTotalPages } from "redux/selectors";
import { useSearchParams } from "react-router-dom";

export default function Pagination({ currentPage: page, changePage, totalPages }) {
const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';

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
    
    const items = (page, totalPages) => {
        if (isMobile) {
            if (totalPages <= 4) {
            let pages = []
             for (let i = 1; i <= totalPages; i += 1) {
                 pages.push(i)
             }
             return pages
        }
        if ( totalPages > 4 && page <= 3) {
            return [1, 2, 3, 4]
        } 
        if (totalPages > 4 && page > 3 && page + 1 <= totalPages) {
            return [page-2, page-1, page, page+1]
        } 
        if (totalPages > 5 && page > 3 && page+1 >= totalPages) {
            return [totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
        } 
        }
         if (totalPages <= 5) {
            let pages = []
             for (let i = 1; i <= totalPages; i += 1) {
                 pages.push(i)
             }
             return pages
        }
        if ( totalPages > 5 && page <= 3) {
            return [1, 2, 3, 4, 5]
        } 
        if (totalPages > 5 && page > 3 && page + 2 <= totalPages) {
            return [page-2, page-1, page, page+1, page+2]
        } 
        if (totalPages > 5 && page > 3 && page+2 >= totalPages) {
            return [page - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]
        } 
    }
    const pages = items(page, totalPages);

    const handleClickPageBack = () => {
        setSearchParams({query, page: page-1})
    }

    const handleClickPageForward = () => {
        setSearchParams({query, page: page+1})
    }

    const currentPage = (item) => {
        return item ===page ? "current" : ""
    }

  return (
    <PaginationContainer>
          <Button onClick={handleClickPageBack} disabled={page === 1} className="buttonArrow">
              <SvgIcon id={'icon-arrow-right'} className="iconArrowLeft"/> 
      </Button>
          <Wrapper>
              {pages.map(item => <Button className={currentPage(item)} onClick={changePage} key={item}>{item}</Button>)}
      </Wrapper>
          <Button  onClick={handleClickPageForward} disabled={page===totalPages} className="buttonArrow">
              <SvgIcon id={'icon-arrow-right'} className="iconArrow"/>
      </Button>
    </PaginationContainer>
  );
}
