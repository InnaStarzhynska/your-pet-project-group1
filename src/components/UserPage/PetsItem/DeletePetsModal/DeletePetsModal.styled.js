import styled from 'styled-components';

export const BoxPetsDelete = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 12px;
   font-family: inherit;
   font-size: 16px;
   font-weight: 500;
   line-height: 1.38;
   letter-spacing: 0.04em;
  color: #888888;
   border-radius: 40px;
   background-color: inherit;
   border: none;
   cursor: pointer;
   z-index: 10;
   position: absolute;
   right: 16px; 
   top: 272px; 

  transition: box-shadow 250ms cubic-bezier(0.21, 0.65, 0.66, 0.12);

   &:hover,
   &:focus {
     box-shadow: 7px 13px 14px 0px #74B1E83D;
   }

   @media screen and (min-width: 767px) {
    top: 18px;
    right: 18px;
    width: auto;
    height: auto;
  }

  @media screen and (min-width: 1280px) {
    top: 20px;
    right: 20px;
    height: 50px;
    width: 50px;
  }
`;