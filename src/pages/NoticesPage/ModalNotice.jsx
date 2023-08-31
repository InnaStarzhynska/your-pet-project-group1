import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addNoticeToFavorites,
  removeNoticeFromFavorites,
} from '../../redux/operations/fetchNotices';
import Modal from "components/Modal/Modal";
import {
  ModalNoticeBox,
  Image,
  ModalNoticeWrap,
  CloseBtn,
  Title,
  ModalNoticeInfoList,
  Comments,
  ModelItemInfo,
  Key,
  Value,
  AddressLink,
  AddBtn,
  CommentsBold,
  Category,
  ContactLink,
  ImageContainer,
} from './ModalNotice.styled';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { colors } from 'constants/colors';
import { selectNoticeById, selectLoggedIn } from 'redux/selectors';
import { createPortal } from 'react-dom';

function formatDate(inputDate) {
  const dateObj = new Date(inputDate);
  const day = String(dateObj.getDate()).padStart(2, '0');
  const month = String(dateObj.getMonth() + 1).padStart(2, '0');
  const year = dateObj.getFullYear();

  return `${day}.${month}.${year}`;
}

const modalApproveAction = document.querySelector('#modal_approveAction');

const ModalNotice = ({
  // handleClickHeart,
  toggleModal,
  isFavorite,
  isDisabledBtn,
  isModalOpen,
}) => {
  const dispatch = useDispatch();
  const notice = useSelector(selectNoticeById);
  const [email, setEmail] = useState(notice.owner?.email || 'unknown');
  const [phone, setPhone] = useState(notice.owner?.phone || 'unknown');
  console.log(notice._id);
  useEffect(() => {
    setEmail(notice.owner?.email || 'unknown');
    setPhone(notice.owner?.phone || 'unknown');
  }, [notice.owner]);
  const isLoggedIn = useSelector(selectLoggedIn);

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

  return createPortal (
   <><Modal closeModal={isModalOpen}>
      <ModalNoticeBox>
        <ModalNoticeWrap>
          <ImageContainer>
            <Image src={notice.avatar} alt={notice.name} />
          </ImageContainer>
          <Category>
            {notice.category === 'for-free' ? 'in good hands' : notice.category}
          </Category>
          <div>
            <Title>{notice.title}</Title>
            <ModalNoticeInfoList>
              <ModelItemInfo>
                <Key>Name:</Key>
                <Value>{notice.name}</Value>
              </ModelItemInfo>
              <ModelItemInfo>
                <Key>Birthday:</Key>
                <Value>{formatDate(notice.dateOfBirth)}</Value>
              </ModelItemInfo>
              <ModelItemInfo>
                <Key>Type:</Key>
                <Value>{notice.type}</Value>
              </ModelItemInfo>
              <ModelItemInfo>
                <Key>Place:</Key>
                <Value>{notice.location}</Value>
              </ModelItemInfo>
              <ModelItemInfo>
                <Key>The sex:</Key>
                <Value>{notice.sex}</Value>
              </ModelItemInfo>
              {notice.price && (
                <ModelItemInfo>
                  <Key>Price:</Key>
                  <Value>{notice.price}</Value>
                </ModelItemInfo>
              )}
              <ModelItemInfo>
                <Key>Email:</Key>
                <AddressLink href={`mailto:${email}`}>{email}</AddressLink>
              </ModelItemInfo>
              <ModelItemInfo>
                <Key>Phone:</Key>
                <AddressLink href={`tel:${phone}`}>{phone}</AddressLink>
              </ModelItemInfo>
            </ModalNoticeInfoList>
          </div>
        </ModalNoticeWrap>
        <Comments>
          <CommentsBold>Comments: </CommentsBold> {notice.comments}
        </Comments>
        <CloseBtn type="button" onClick={isModalOpen}>
          <SvgIcon id={'icon-cross-small'} color={colors.blueColor} />
        </CloseBtn>
        <div>
          <ContactLink href={`tel:${phone}`}>Contact</ContactLink>
          <AddBtn
            disabled={isDisabledBtn}
            onClick={() => {
              handleToggleFavorite(notice._id, isLoggedIn, !isFavorite);
            }}
          >
            {isFavorite ? (
              <span
                style={{
                  fontSize: 12,
                  letterSpacing: 0.1,
                }}
              >
                Remove from
              </span>
            ) : (
              <span>Add to</span>
            )}

            <SvgIcon id={'icon-heart'} color={colors.secondaryTextColor} className={"modalHeartIcon"}
/>
          </AddBtn>
        </div>
      </ModalNoticeBox>
    </Modal>
      </>, modalApproveAction
  );
};

export default ModalNotice;
