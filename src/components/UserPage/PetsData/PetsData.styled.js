import styled from 'styled-components';

export const PetsHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 40px;
    margin-top: 40px;
    margin-right: 0;
    margin-bottom: 24px;
    margin-left: 0;
    @media screen and (min-width: 768px) {
        margin-top: 40px;
        margin-right: 0;
        margin-bottom: 20px;
        margin-left: 0;
    }
    @media screen and (min-width: 1280px) {
        margin-top: 60px;
        margin-right: 0;
        margin-bottom: 24px;
        margin-left: 0;
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

// export const NoPetsMessageWrapper = styled.div`
//     margin-top: 20px;
//     padding-top: 40px;
//     padding-right: 20px;
//     padding-bottom: 40px;
//     padding-left: 20px;

//     font-weight: 500;
//     font-size: 16px;

//     border-radius: 20px;
//     background-color: #ffffff;
//     box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

//     @media screen and (min-width: 768px) {
//         font-size: 24px;
//         text-align: center;
//     }
// `;