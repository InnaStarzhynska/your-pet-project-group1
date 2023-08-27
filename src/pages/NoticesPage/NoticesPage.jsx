import { Container } from 'components/Sharedlayout/Sharedlayout.styled';
import NoticesCategoriesList from './NoticesCategoriesList';
import NoticesCategoriesNav from './NoticesCategoriesNav';
import NoticesSearch from './NoticesSearch';
import AddPetButton from 'components/AddPetButton/AddPetButton';
import { NoticesContainer, Section } from './NoticesPage.styled';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import React from 'react';

export default function NoticesPage() {
  return (
    <Section>
      <Container>
        <NoticesSearch />
        <NoticesContainer>
          <NoticesCategoriesNav />
          <AddPetButton />
        </NoticesContainer>
        <NoticesCategoriesList />
      </Container>
    </Section>
  );
}
