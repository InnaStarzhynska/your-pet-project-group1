import styled from 'styled-components';

export const UserPageWrapper = styled.div`
    padding: 0px 20px;
    width: 100%;
    height: 100%;
   
    @media screen and (min-width: 768px) {
        width: 768px;
        padding: 0px 32px;
    }
    @media screen and (min-width: 1280px) {
        width: 1280px;
        padding: 0px 16px;
    }
`;

export const MainContent = styled.div`
    position: relative;

    @media screen and (min-width: 1280px) {
        display: flex;
        gap: 32px;
    }
`;

export const TitleWrap = styled.div`
    margin: 40px 0 18px;
    @media screen and (min-width: 768px) {
        margin: 60px 0 24px;
    }
`;

export const Card = styled.div`
    padding-top: 20px;
    padding-right: 8px;
    padding-bottom: 24px;
    padding-left: 8px;
    background: #ffffff;
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 20px;
    @media screen and (min-width: 768px) {
        width: 704px;
        padding-top: 20px;
        padding-right: 76px;
        padding-bottom: 20px;
        padding-left: 20px;
        border-radius: 40px;
    }
    @media screen and (min-width: 1280px) {
        width: 395px;
        height: 520px;
        padding: 20px;
    }
`;

export const Title = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    @media screen and (min-width: 768px) {
        font-size: 28px;
    }
`;
