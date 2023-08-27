import React from 'react';

import moment from 'moment/moment';
import {
  ContainerInfo,
  Content,
  Date,
  ImageNews,
  ItemNews,
  LinkReadMore,
  TextNews,
  TitleNews,
} from './NewsItem.styled';

export default function NewsItem({ article }) {
  const { url = '', text, title, imgUrl, date } = article;
  const formatedDate = moment(date).format('L');

  return (
    <ItemNews>
      <ImageNews src={imgUrl} alt="news" />

      <Content>
        <TitleNews>{title}</TitleNews>
        <TextNews>{text}</TextNews>

        <ContainerInfo>
          <Date>{formatedDate}</Date>
          <LinkReadMore href={url} target="_blank">
            {'Read more'}
          </LinkReadMore>
        </ContainerInfo>
      </Content>
    </ItemNews>
  );
}
