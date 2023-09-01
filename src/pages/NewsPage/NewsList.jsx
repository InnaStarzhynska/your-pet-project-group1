import { useSelector } from 'react-redux';
import { List } from './NewList.styled';
import NewsItem from './NewsItem';
import { selectNews } from 'redux/selectors';
import { Text } from 'pages/NoticesPage/NoticesCategoriesList.styled';

export const NewsList = () => {
  const news = useSelector(selectNews);
  const isNews = news.length !== 0 ? true : false;
  return (
    <List>
      {!isNews ? <Text>No news was found for your request </Text> :
        (news.map(article => (
          <NewsItem key={article._id} article={article} />
        )))
      }
    </List>
  );
};
