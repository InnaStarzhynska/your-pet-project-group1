import { List } from './NewList.styled';
import NewsItem from './NewsItem';
const NewsArticals = [
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/04/16/magazine/16mag-LOR/16mag-LOR-blog480.jpg',
    title: 'What I Learned Dogsitting for New York City’s Opulent Elite',
    text: 'In a city of yawning class inequality, some side hustles let you glimpse how the other half lives.',
    date: '2023-04-11T09:00:18+0000',
    url: 'https://www.nytimes.com/2023/04/11/magazine/dogsitting-rich-new-york.html',
    id: 'nyt://article/8d29f1fc-d146-509d-8ceb-5a5b17d7886b',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/04/04/multimedia/00VIRTUAL-VETS-01b-fmzk/00VIRTUAL-VETS-01b-fmzk-blog480.jpg',
    title: 'The Virtual Vet Will See You Meow',
    text: 'Veterinary telemedicine could help more pet owners access much-needed care and put anxious animals at ease, but challenges remain.',
    date: '2023-04-07T09:00:46+0000',
    url: 'https://www.nytimes.com/2023/04/07/health/vet-pet-health-telemedicine.html',
    id: 'nyt://article/992f2f7f-793c-5553-b722-348625f53a4b',
  },
  {
    imgUrl:
      'https://www.nytimes.com/images/2023/04/04/travel/00tripped-up-illo/00tripped-up-illo-blog480.jpg',
    title:
      'Help! My Dog Was Rejected by the Airline Because of a Carrier Rule That Doesn’t Exist.',
    text: 'A gate agent suddenly objected to a canine who’d flown previously on the same route, saying the carrier wasn’t big enough. Our columnist tries to sort out what the actual rules for pets on planes are.',
    date: '2023-04-05T09:00:24+0000',
    url: 'https://www.nytimes.com/2023/04/05/travel/airlines-flying-with-dogs-cats.html',
    id: 'nyt://article/08d32cd1-6eb4-50f7-8126-f7bad37b098f',
  },
  {
    imgUrl: 'https://media4.giphy.com/media/h52OM8Rr5fLiZRqUBD/giphy.gif',
    title: 'On Pets, Moral Logic and Love',
    text: 'I didn’t think I was a dog person. Then Herbie showed up and taught me a lesson about love.',
    date: '2023-03-19T13:00:06+0000',
    url: 'https://www.nytimes.com/2023/03/19/opinion/pets-dogs-love.html',
    id: 'nyt://article/0dc54659-a8a1-589a-bac8-f4d8321b0f43',
  },
];
export const NewsList = () => {
  return (
    <List>
      {NewsArticals.map(article => (
        <NewsItem key={article._id} article={article} />
      ))}
    </List>
  );
};
