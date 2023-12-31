import { colors } from "constants/colors";
import styled from "styled-components";


export const Button = styled.button`
display: flex;
align-items:center;
justify-content: center;
width: 35px;
height: 35px;
border-radius: 50%;
border:  1px solid ${colors.blueColor};
color: ${props => props.className === "current" ? colors.whiteColor : colors.textColor };
background-color: ${props => props.className === "current" ? colors.blueColor :  'transparent'};
font-family: Inter;
font-size: 16px;
font-weight: 400;
cursor: pointer;

&:hover, &focus {
    color: ${colors.textButtonColor};
    background-color: ${colors.blueColor}
}
`
export const Wrapper = styled.div`
display: flex;
gap: 8px
`
export const PaginationContainer = styled.div`
display: flex;
justify-content: center;
gap: 23px`
