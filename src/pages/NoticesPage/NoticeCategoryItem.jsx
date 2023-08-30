import { formatDistanceStrict } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { getNoticeById } from 'redux/operations/fetchNotices';
import { useState } from 'react';
import {selectUser, selectLoggedIn} from 'redux/selectors';
  import {addNoticeToFavorites, removeNoticeFromFavorites } from 'redux/operations/fetchNotices';
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




export default function NoticesCategoryItem({item, isModalOpen}) {
  const dispatch = useDispatch();

  const { _id: noticeId, category, avatar, location, dateOfBirth, sex, title, favorite } =
    item;

    const isLoggedIn = useSelector(selectLoggedIn);
    const {id} = useSelector(selectUser);
    const [isFavorite] = useState(favorite.includes(id));

    const handleToggleFavorite = (noticeId, isLoggedIn, favorite) => {
      if (!isLoggedIn) {
        return;
      }
  
      if (favorite) {
        dispatch(addNoticeToFavorites({ _id: noticeId }));
        return;
      }
  
      dispatch(removeNoticeFromFavorites({ _id: noticeId }));
    };
  


  const formatPetsAge = birthDate => {
    return formatDistanceStrict(new Date(), Date.parse(birthDate), {
      unit: 'year',
      roundingMethod: 'ceil',
    });
  };

  const petsAge = formatPetsAge(dateOfBirth);

  function formatNoticeTitle(noticeTitle) {
    if (noticeTitle && noticeTitle.length > 29) {
      return noticeTitle.slice(0, 29) + '...';
    } else return noticeTitle;
  }

  function formatLocation(noticeLocation) {
    if (noticeLocation && noticeLocation.length > 5) {
      return noticeLocation.slice(0, 5) + '...';
    } else return noticeLocation;
  }

  const formatNoticeLocation = formatLocation(location);

  const noticeTitle = formatNoticeTitle(title);

    

console.log(favorite)
console.log(id)
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
      <AddToFavouriteBtn  type="button" onClick={()=> handleToggleFavorite(noticeId, isLoggedIn, !favorite.includes(id))}>
        <HeartIcon 
          id={'icon-heart'} 
          className={`heartIcon ${favorite.includes(id)?  'inFavouriteIcon' : ''}`}
        ></HeartIcon>
      </AddToFavouriteBtn>
    
        {/* <DeleteBtn type="button">
          <SvgIcon id={'icon-trash-2'}></SvgIcon>
        </DeleteBtn> */}
      
      <LearnMoreBtnWrap>
          <LearnMoreBtn type="button" isFavorite={isFavorite} className='btn' onClick={() => {
            dispatch(getNoticeById({ noticeId }));
          isModalOpen(true);
                }}>
          Learn more<PawIcon id={'icon-pawprint-1'}></PawIcon>
        </LearnMoreBtn>
      </LearnMoreBtnWrap>
    </Card>)
}
