import SvgIcon from 'components/SvgIcon/SvgIcon';
import {
  NoticesSearchContainer,
  NoticesTitle,
  Search,
  SearchForm,
  SearchButton
} from './NoticesPage.styled';

export default function NoticesSearch({ handleSubmit, query }) {
 
  return (
    <NoticesSearchContainer>
      <NoticesTitle>Find your favorite pet</NoticesTitle>
      <SearchForm onSubmit={handleSubmit}>
        <Search type="text" defaultValue={query} name="search" placeholder="Search" />
        <SearchButton type='submit'><SvgIcon id={'icon-search'} /></SearchButton>
      </SearchForm>
    </NoticesSearchContainer>
  );
}
