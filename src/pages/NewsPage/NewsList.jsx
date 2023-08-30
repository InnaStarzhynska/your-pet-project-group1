import { useSelector } from 'react-redux';
import { List } from './NewList.styled';
import NewsItem from './NewsItem';
import { selectNews } from 'redux/selectors';

export const NewsList = () => {
  const news = useSelector(selectNews);
  return (
    <List>
      {news.map(article => (
        <NewsItem key={article._id} article={article} />
      ))}
    </List>
  );
};
