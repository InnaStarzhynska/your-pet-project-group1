import React, { useState } from 'react';

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
  ButtonRead,
} from './NewsItem.styled';

export default function NewsItem({ article }) {
  const { url = '', text, title, imgUrl, date } = article;
  const formatedDate = moment(date).format('L');

  const [showFullText] = useState(false);

  return (
    <ItemNews>
      <ImageNews src={imgUrl} alt="news" />

      <Content>
        <TitleNews>{title}</TitleNews>
        <TextNews>
          {showFullText ? text : text.split(' ').slice(0, 23).join(' ')}
          {!showFullText && text.split(' ').length > 20 && (
            <ButtonRead href={url} target="_blank">
              {'...'}
            </ButtonRead>
          )}
        </TextNews>

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
