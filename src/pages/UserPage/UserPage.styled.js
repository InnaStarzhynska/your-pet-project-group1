import styled from 'styled-components';

export const Section = styled.section`
 padding-top: 40px;

 @media screen and (min-width: 767px) {
  
    padding-top: 60px;
    
  }
  @media screen and (min-width: 1280px) {
    padding-top: 62px;
    
  }
`

export const UserPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 46px;
  margin: 0 auto;
  padding-bottom: 137px;
  @media screen and (min-width: 480px) {
    width: 280px;
  }

  @media screen and (min-width: 767px) {
    width: 768px;
    gap: 40px;
    padding-bottom: 121px;
  }
  @media screen and (min-width: 1280px) {
    width: 1248px;
    flex-direction: row;
    gap: 32px;
    padding-bottom: 121px;
  }
`;

export const UserTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: #000000;
  margin-bottom: 18px;

  @media screen and (min-width: 767px) {
    font-size: 28px;
    letter-spacing: 0em;
    margin-bottom: 24px;
    color: #111111;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const UserContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;

  width: 280px;
  padding-top: 20px;
  padding-right: 8px;
  padding-bottom: 25px;
  padding-left: 8px;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: 3px 8px 14px 0px #88c6fd30;
  @media screen and (min-width: 767px) {
    width: 704px;
    padding-right: 76px;
    padding-bottom: 21px;
    padding-left: 20px;
    border-radius: 40px;
    gap: 15px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    padding-right: 24px;
    padding-bottom: 20px;
    padding-left: 16px;
    gap: 23px;
  }
`;
