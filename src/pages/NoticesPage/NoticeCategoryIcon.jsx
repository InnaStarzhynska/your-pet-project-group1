import SvgIcon from 'components/SvgIcon/SvgIcon';
import { formatDistanceStrict } from 'date-fns';
import { useSelector } from 'react-redux';
import { selectUser, selectLoggedIn } from 'redux/selectors';
import {
  Avatar,
  Card,
  CardTitle,
  InfoList,
  InfoItem,
  LearnMoreBtn,
  LearnMoreBtnWrap,
  AddToFavouriteBtn,
  StyledCategory,
  DeleteBtn,
  HeartIcon,
  InfoIcon,
  PawIcon,
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

export default function NoticesCategoriesList({ addToFavourite }) {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectLoggedIn);

  const { _id, category, owner, avatar, location, dateOfBirth, sex, title } =
    item;

  const formatPetsAge = birthDate => {
    return formatDistanceStrict(new Date(), Date.parse(birthDate), {
      unit: 'year',
      roundingMethod: 'ceil',
    });
  };

  const petsAge = formatPetsAge(dateOfBirth);

  const favourite = isLoggedIn && user.favourite.includes(_id);

  const isOwnPet = owner?._id === user.id;

  return (
    <Card className="card">
      <Avatar src={avatar} alt={title} />
      <InfoList>
        <InfoItem>
          <InfoIcon id={'icon-location-1'}></InfoIcon>
          {location}
        </InfoItem>
        <InfoItem>
          <InfoIcon id={'icon-clock'}></InfoIcon>
          {petsAge}
        </InfoItem>
        <InfoItem>
          {sex === 'male' ? (
            <InfoIcon id={'icon-male'}></InfoIcon>
          ) : (
            <InfoIcon id={'icon-female'}></InfoIcon>
          )}
          {sex}
        </InfoItem>
      </InfoList>
      <CardTitle>{title}</CardTitle>
      <StyledCategory>{category}</StyledCategory>
      <AddToFavouriteBtn type="button" onClick={() => addToFavourite(_id)}>
        <HeartIcon
          id={'icon-heart'}
          className={`${'heartIcon'} ${favourite && 'inFavouriteIcon'}`}
        ></HeartIcon>
      </AddToFavouriteBtn>
      {isOwnPet && (
        <DeleteBtn type="button">
          <SvgIcon id={'icon-trash-2'}></SvgIcon>
        </DeleteBtn>
      )}
      <LearnMoreBtnWrap>
        <LearnMoreBtn type="button" className="btn">
          Learn more<PawIcon id={'icon-pawprint-1'}></PawIcon>
        </LearnMoreBtn>
      </LearnMoreBtnWrap>
    </Card>
  );
}
