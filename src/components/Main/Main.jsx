import {
  MainContainer,
  MainTitle,
  ImageContainer,
  ImageOne,
  ImageTwo,
  ImageThree,
} from './Main.styled';

export default function Main() {
  return (
    <MainContainer>
      <MainTitle>Take good care of your small pets</MainTitle>
      <ImageContainer>
        <ImageOne alt="Buldog" />
        <ImageTwo alt="Dog" />
        <ImageThree alt="Cat" />
      </ImageContainer>
    </MainContainer>
  );
}
