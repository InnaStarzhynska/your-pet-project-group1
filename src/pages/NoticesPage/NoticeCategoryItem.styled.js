import styled from 'styled-components';
import { colors } from 'constants/colors';
import SvgIcon from 'components/SvgIcon/SvgIcon';

export const Card = styled.div`
position: relative;
 width: 280px;
  height: 456px; 
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  background: rgba(255, 255, 255, 1);
  &:hover{
    box-shadow: 7px 13px 14px 0px rgba(116, 177, 232, 0.24);
    
  }



`

export const Avatar = styled.img`
width: 100%;
height: 288px;
object-fit: cover;

`



export const CardTitle = styled.h2`
font-size: 24px;
font-weight: 700;
line-height: 33px;
letter-spacing: 0em;
text-align: left;
margin: 20px;
`

export const InfoList = styled.ul`
display: flex;
position: absolute;
bottom: 180px;
left: 8px;

  gap: 12px;
`

export const InfoItem = styled.li`
display: flex;
width: 80px;
height: 28px;
justify-content: center;
align-items: center;
gap: 4px;
background-color: ${colors.lightBlueColor};
border-radius: 16px;
font-size: 12px;
font-weight: 600;
line-height: 16px;
letter-spacing: 0.04em;
text-align: left;

&:hover {
color: ${colors.textButtonColor};
svg{stroke: white;}

}


`
export const LearnMoreBtn = styled.button`
width: 248px;
height: 38px;
display: flex;
align-items: center;
justify-content: center;
gap: 12px;
padding: 8px 28px;
border-radius: 40px;
border: 2px;
font-size: 16px;
font-weight: 600;
line-height: 22px;
letter-spacing: 0.04em;
color: ${colors.blueColor};
border: 2px solid ${colors.blueColor};
background-color: transparent;
cursor: pointer;
&:hover{
  background-image: ${colors.gradientBlueColor};
  color: ${colors.whiteColor};
  svg{display: block};
}

&:active{
  color:  ${colors.textButtonColor};
  background-image: ${colors.gradientBlueColor};
  svg{display: block};
};



`

export const LearnMoreBtnWrap = styled.div`
padding: 0 16px;
`

export const AddToFavouriteBtn = styled.button`
width: 40px;
height: 40px;
background-color: ${colors.lightBlueColor};
border-radius: 50%;
padding: 8px;
border: none;
position: absolute;
top: 12px;
right: 12px;
cursor: pointer;
color: ${colors.lightBlueColor};
&:hover{
  color: ${colors.blueColor};

}

`
export const StyledCategory = styled.button`
width: 126px;
height: 32px;
position: absolute;
top: 16px;
border-radius: 0px 16px 16px 0px;
gap: 10px;
background: ${colors.lightBlueColor};
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 19px;
letter-spacing: 0em;
text-align: center;
padding: 11px 17px;
border: none;
display: flex;
align-items: center;
justify-content: center;

`
export const DeleteBtn = styled.button`
width: 40px;
height: 40px;
background-color: ${colors.lightBlueColor};
border-radius: 50%;
padding: 8px;
border: none;
position: absolute;
top: 68px;
right: 12px;

`
export const HeartIcon = styled(SvgIcon)`
 fill: ${colors.lightBlueColor};
 &:hover{
  fill: ${colors.blueColor};
  
}
&:focus{
  fill: ${colors.blueColor};
  

} 

`
export const InfoIcon = styled(SvgIcon)`
stroke: ${colors.blueColor}; 


`

export const PawIcon = styled(SvgIcon)`
display: none;
stroke: ${colors.whiteColor};
`
