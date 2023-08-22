import SvgIcon from 'components/SvgIcon/SvgIcon';
import {
  NoticesContainer,
  NoticesTitle,
  Search,
  SearchForm,
} from './NoticesPage.styled';

export default function NoticesSearch() {
  return (
    <NoticesContainer>
      <NoticesTitle>Find your favorite pet</NoticesTitle>
      <SearchForm>
        <Search type="text" name="search" placeholder="Search" />
        <SvgIcon id={'icon-search'} className={'svg'} />
      </SearchForm>
    </NoticesContainer>
  );
}
