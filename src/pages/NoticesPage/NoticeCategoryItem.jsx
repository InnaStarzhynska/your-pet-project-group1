import { formatDistanceStrict } from 'date-fns';
import { useDispatch } from 'react-redux';
import { getNoticeById } from 'redux/operations/fetchNotices';
import {
  Avatar,
  Card,
  CardTitle,
  InfoIconsWraper,
  LocateLink,
  InfoElement,
  LearnMoreBtn,
  LearnMoreBtnWrap,
  AddToFavouriteBtn,
  StyledCategory,
  // DeleteBtn,
  HeartIcon,
  InfoIcon,
  PawIcon,
} from './NoticeCategoryItem.styled';



export default function NoticesCategoryItem({item}) {
  const dispatch = useDispatch();

  const { _id, category, avatar, location, dateOfBirth, sex, title } =
    item;

  const formatPetsAge = birthDate => {
    return formatDistanceStrict(new Date(), Date.parse(birthDate), {
      unit: 'year',
      roundingMethod: 'ceil',
    });
  };

  const petsAge = formatPetsAge(dateOfBirth);

  function formatNoticeTitle(noticeTitle) {
    if (noticeTitle && noticeTitle.length > 32) {
      return noticeTitle.slice(0, 32) + '...';
    } else return noticeTitle;
  }

  function formatLocation(noticeLocation) {
    if (noticeLocation && noticeLocation.length > 5) {
      return noticeLocation.slice(0, 5) + '...';
    } else return noticeLocation;
  }

  const formatNoticeLocation = formatLocation(location);

  const noticeTitle = formatNoticeTitle(title);

    // const favourite = isLoggedIn && user.favourite.includes(_id);

  

  return (
    <Card className="card">
      <Avatar src={avatar} alt={title} />
      <InfoIconsWraper>
        <LocateLink
        target="_blank"
        href={`https://www.google.com/maps/place/${location}`}>
          <InfoIcon id={'icon-location-1'}></InfoIcon>
          {formatNoticeLocation}
        </LocateLink>
        <InfoElement>
          <InfoIcon id={'icon-clock'}></InfoIcon>
          {petsAge}
        </InfoElement>
        <InfoElement>
          {sex === 'male' ? (
            <InfoIcon id={'icon-male'}></InfoIcon>
          ) : (
            <InfoIcon id={'icon-female'}></InfoIcon>
          )}
          {sex}
        </InfoElement>
      </InfoIconsWraper>
      <CardTitle>{noticeTitle}</CardTitle>
      <StyledCategory>{category}</StyledCategory>
      <AddToFavouriteBtn  type="button">
        <HeartIcon className='heartIcon'
          id={'icon-heart'}
          // className={`${'heartIcon'} ${favourite && 'inFavouriteIcon'}`}
        ></HeartIcon>
      </AddToFavouriteBtn>
    
        {/* <DeleteBtn type="button">
          <SvgIcon id={'icon-trash-2'}></SvgIcon>
        </DeleteBtn> */}
      
      <LearnMoreBtnWrap>
        <LearnMoreBtn type="button" className='btn'  onClick={() => {
                  dispatch(getNoticeById(_id));
                }}>
          Learn more<PawIcon id={'icon-pawprint-1'}></PawIcon>
        </LearnMoreBtn>
      </LearnMoreBtnWrap>
    </Card>
  );
}
