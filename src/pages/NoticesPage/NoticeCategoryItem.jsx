import { formatDistanceStrict } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { getNoticeById } from 'redux/operations/fetchNotices';
import { useState } from 'react';
import { selectUser, selectLoggedIn } from 'redux/selectors';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import ModalDeleteAds from 'components/Modals/ModalDeleteAds';
import {
  addNoticeToFavorites,
  removeNoticeFromFavorites,
} from 'redux/operations/fetchNotices';
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
  DeleteBtn,
  HeartIcon,
  InfoIcon,
  PawIcon,
} from './NoticeCategoryItem.styled';
import defaultImg from '../../images/errorImg.jpg';
import ModalAtention from '../../components/ModalAtention/ModalAtention';

export default function NoticesCategoryItem({ item, isModalOpen }) {
  const dispatch = useDispatch();

  const switchModal = () => {
    setIsShownModal(prevState => !prevState);
    return;
  };

  const {
    _id: noticeId,
    category,
    avatar,
    location,
    dateOfBirth,
    sex,
    title,
    favorite,
    owner,
  } = item;

  const isLoggedIn = useSelector(selectLoggedIn);
  const { id } = useSelector(selectUser);
  const [isFavorite] = useState(favorite.includes(id));
  const [modalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isShownModal, setIsShownModal] = useState(false);

  const toggleDeleteModal = () => {
    setIsModalDeleteOpen(prevState => !prevState);
  };

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

  return (
    <>
      {isShownModal ? (
        <ModalAtention toggleModal={switchModal}></ModalAtention>
      ) : (
        <Card className="card">
          <Avatar
            src={avatar}
            alt={title}
            onError={event => {
              event.target.src = defaultImg;
              event.onerror = null;
            }}
          />
          <InfoIconsWraper>
            <LocateLink
              target="_blank"
              href={`https://www.google.com/maps/place/${location}`}
            >
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
          <AddToFavouriteBtn
            type="button"
            onClick={() => {
              if (!isLoggedIn) {
                switchModal();
                return;
              }
              handleToggleFavorite(
                noticeId,
                isLoggedIn,
                !favorite.includes(id)
              );
            }}
          >
            <HeartIcon
              id={'icon-heart'}
              className={`heartIcon ${
                favorite.includes(id) ? 'inFavouriteIcon' : ''
              }`}
            ></HeartIcon>
          </AddToFavouriteBtn>

          {id === owner ? (
            <DeleteBtn
              type="button"
              onClick={() => {
                toggleDeleteModal();
              }}
            >
              <SvgIcon id={'icon-trash-2'}></SvgIcon>
            </DeleteBtn>
          ) : (
            ''
          )}
          {sex}
        </InfoElement>
      </InfoIconsWraper>
      <CardTitle>{noticeTitle}</CardTitle>
      <StyledCategory>{category}</StyledCategory>
      <AddToFavouriteBtn
        type="button"
        onClick={() =>
          handleToggleFavorite(noticeId, isLoggedIn, !favorite.includes(id))}      
      >
      
        { !favorite.includes(id) ?  (<HeartIcon
          id={'icon-heart'}
       className={"heartIcon"}
        ></HeartIcon>) :  (<HeartIcon
        id={'icon-heart-2'}
     
      ></HeartIcon>)}
       
      </AddToFavouriteBtn>

      {id === owner ? (
        <DeleteBtn
          type="button"
          onClick={() => {
            toggleDeleteModal();
          }}
        >
          <SvgIcon id={'icon-trash-2'}></SvgIcon>
        </DeleteBtn>
      ) : (
        ''
      )}

          {modalDeleteOpen ? (
            <ModalDeleteAds
              modalClose={toggleDeleteModal}
              _id={noticeId}
              title={title}
            />
          ) : (
            ''
          )}

          <LearnMoreBtnWrap>
            <LearnMoreBtn
              type="button"
              isFavorite={isFavorite}
              className="btn"
              onClick={() => {
                dispatch(getNoticeById({ _id: noticeId }));
                isModalOpen(true);
              }}
            >
              Learn more<PawIcon id={'icon-pawprint-1'}></PawIcon>
            </LearnMoreBtn>
          </LearnMoreBtnWrap>
        </Card>
      )}
    </>
  );
}
