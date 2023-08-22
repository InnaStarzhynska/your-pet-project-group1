import NoticesCategoriesList from './NoticesCategoriesList';
import NoticesCategoriesNav from './NoticesCategoriesNav';
import NoticesSearch from './NoticesSearch';
import AddPetButton from 'components/AddPetButton/AddPetButton';

export default function NoticesPage() {
  return (
    <>
      <NoticesSearch />
      <NoticesCategoriesNav />
      <NoticesCategoriesList />
      <AddPetButton />
    </>
  );
}
