import { useState } from 'react';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import {
  NoticesSearchContainer,
  NoticesTitle,
  Search,
  SearchForm,
  SearchButton,
  ClearButton
} from './NoticesPage.styled';

export default function NoticesSearch({ handleSubmit, query }) {
  const [inputValue, setInputValue] = useState(query);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputClear = () => {
    setInputValue('');
  };
 
  return (
    <NoticesSearchContainer>
      <NoticesTitle>Find your favorite pet</NoticesTitle>
      <SearchForm onSubmit={handleSubmit}>
        <Search type="text" value={inputValue} name="search" placeholder="Search" onChange={handleInputChange} />
        {inputValue && (
          <ClearButton type="button" onClick={handleInputClear}>
                  <SvgIcon id={'icon-cross-small'} />
              </ClearButton>
        )}
        <SearchButton type='submit'><SvgIcon id={'icon-search'} /></SearchButton>
      </SearchForm>
    </NoticesSearchContainer>
  );
}
