import SvgIcon from 'components/SvgIcon/SvgIcon';
import {
  Avatar,
  Card,
  CardTitle,
  InfoList,
  AvatarWraper,
  InfoItem,
  LearnMoreBtn,
  LearnMoreBtnWrap,
  AddToFavouriteBtn,
  StyledCategory,
  DeleteWithFavouriteBtn,
  HeartIcon,
  InfoIcon,
  PawIcon
} from './NoticesPage.styled';

const item = {
  _id: '64e5b519832acb0de7029d2b',
  category: 'sell',
  title: 'rats for sell',
  name: 'ratty',
  dateOfBirth: '2015-02-21T22:00:00.000+00:00',
  type: 'rat',
  sex: 'female',
  location: 'Lviv',
  price: 333,
  comments: 'ratratratrat',
  owner: '64e5ad4c573d75c978b7a81f',
  createdAt: '2023-08-23T07:28:25.039+00:00',
  updatedAt: '2023-08-23T07:28:25.189+00:00',
  avatar: 'https://picsum.photos/id/237/3500/2095',
};

export default function NoticesCategoriesList() {
  const { _id, category, owner, avatar, location, dateOfBirth, sex, title } =
    item;

  return (
    <Card>
      <AvatarWraper>
        <Avatar src={avatar} alt={title} />
      </AvatarWraper>
      <InfoList>
        <InfoItem>
          <InfoIcon id={'icon-location-1'}></InfoIcon>
          {location}
        </InfoItem>
        <InfoItem>
          <InfoIcon id={'icon-clock'}></InfoIcon>
          {dateOfBirth}
        </InfoItem>
        <InfoItem>
          <InfoIcon id={'icon-female'}></InfoIcon>
          {sex}
        </InfoItem>
      </InfoList>
      <CardTitle>{title}</CardTitle>
      <StyledCategory>{category}</StyledCategory>
      <AddToFavouriteBtn>
        <HeartIcon id={'icon-heart'}></HeartIcon>
      </AddToFavouriteBtn>
      <DeleteWithFavouriteBtn>
        <SvgIcon id={'icon-trash-2'}></SvgIcon>
      </DeleteWithFavouriteBtn>
      <LearnMoreBtnWrap>
        <LearnMoreBtn>Learn more<PawIcon id={"icon-pawprint-1"}></PawIcon></LearnMoreBtn>
      </LearnMoreBtnWrap>
    </Card>
  );
}

//   return <NoticesList />;
// }
