import SvgIcon from 'components/SvgIcon/SvgIcon';
import {
  NoticesSearchContainer,
  NoticesTitle,
  Search,
  SearchForm,
} from './NoticesPage.styled';

export default function NoticesSearch() {
  return (
    <NoticesSearchContainer>
      <NoticesTitle>Find your favorite pet</NoticesTitle>
      <SearchForm>
        <Search type="text" name="search" placeholder="Search" />
        <SvgIcon id={'icon-search'} className={'svg'} />
      </SearchForm>
    </NoticesSearchContainer>
  );
}
