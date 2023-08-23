import styled from 'styled-components';

export const MyPetCard = styled.li`
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
    padding-left: 20px;

    margin-bottom: 20px;

    background: #ffffff;
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 20px;
    width: 100%;
    @media screen and (min-width: 768px) {
        display: flex;
        gap: 20px;
        padding: 20px;
        width: 703px;
    }
    @media screen and (min-width: 1280px) {
        display: flex;
        gap: 20px;
        padding: 20px;
        width: 821px;
    }
`;

export const InfoWrap = styled.div`
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 515px;
    }
    @media screen and (min-width: 1280px) {
        width: 580px;
    }
`;

export const PetImage = styled.img`
    width: 240px;
    height: 240px;
    object-fit: cover;
    margin-top: 0;
    margin-right: auto;
    margin-bottom: 20px;
    margin-left: auto;

    border-radius: 20px;
    @media screen and (min-width: 768px) {
        width: 128px;
        height: 128px;

        margin: 0;
    }
`;

export const SubTitle = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    @media screen and (min-width: 768px) {
        font-weight: 600;
    }
`;

export const NameWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const InfoItem = styled.div`
    display: flex;
    margin-bottom: 12px;
    @media screen and (min-width: 768px) {
        margin-bottom: 16px;
    }
`;

export const InfoText = styled.span`
    display: inline;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    word-break: break-word;
    overflow-wrap: break-word;
`;

export const PetComment = styled.p`
    display: inline;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    @media screen and (min-width: 768px) {
        font-weight: 600;
    }
`;

export const DeleteBtn = styled.button`
    position: absolute;
    padding: 0;
    right: 0;
    translate: -20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    @media screen and (min-width: 768px) {
        translate: -24px 0;
    }
`