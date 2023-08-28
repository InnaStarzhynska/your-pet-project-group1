
import { NewsSearchForm } from './NewsPage.styled'

export default function NewsSearch({handleSubmit, query}) {
  return (
     <NewsSearchForm onSubmit={handleSubmit}>
            <NewsSearch  value={query} type="text" name="search" placeholder="Search" />
          <SearchButton type='submit'><SvgIcon id={'icon-search'} /></SearchButton>
        </NewsSearchForm>
  )
}
