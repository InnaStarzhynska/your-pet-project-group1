import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import { Link } from 'react-router-dom';
import { colors } from 'constants/colors';
import SvgIcon from 'components/SvgIcon/SvgIcon';

export const Section = styled.section`
  padding-top: 40px;

  @media screen and (${devices.tablet}) {
    padding-top: 80px;
  }
`;
export const NoticesContainer = styled.div`
  display: flex;
  @media screen and (${devices.tablet}) {
    justify-content: space-between;
  }
`;
export const NoticesSearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoticesTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
  margin-bottom: 24px;
  text-align: center;
  color: #111111;
  @media screen and (${devices.tablet}) {
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 65.57px;
  }
  @media screen and (${devices.desktop}) {
  }
`;
export const SearchForm = styled.form`
  position: relative;
  width: 280px;

  @media screen and (${devices.tablet}) {
    width: 608px;
  }
`;

export const Search = styled.input`
  width: 100%;
  border: none;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 24px;
  padding-top: 14px;
  padding-bottom: 13px;
  padding-left: 20px;

  @media screen and (${devices.tablet}) {
    font-size: 20px;
    line-height: 24px;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  @media screen and (${devices.desktop}) {
  }
`;

export const NoticesNavbtn = styled(Link)`
  background-color: #cce4fb;
  color: #54adff;
  border: none;
  border-radius: 40px;
  padding: 8px 16px;
  &:hover,
  &:focus {
    background: rgba(84, 173, 255, 1);
    color: #fff;
  }
`;

export const NoticesNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  gap: 8px;
  list-style: none;
  margin-top: 20px;
  @media screen and (${devices.tablet}) {
    width: 319px;
    margin-top: 40px;
  }
  @media screen and (${devices.desktop}) {
    width: 100%;
  }
`;

export const NoticesList = styled.div`
  list-style-type: none;
  display: flex;

  @media screen and (${devices.tablet}) {
    flex-wrap: wrap;
    gap: 20px;
    padding: 0;
    list-style-type: none;
    display: flex;
  }
`;


//my style?//


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

export const AvatarWraper = styled.div`


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
color: ${colors.textButtonColor}


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



&:active{
  color:  ${colors.textButtonColor};
  background-color: ${colors.blueColor};

};


`

export const LearnMoreBtnWrap = styled.div`
padding: 0 16px;
&:hover,
&:focus{
    background-color: ${colors.gradientBlueColor};

  };


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
export const DeleteWithFavouriteBtn = styled.button`
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
&:hover{
  stroke: currentColor;
}

`

export const PawIcon = styled(SvgIcon)`
opacity: 0;
stroke: ${colors.whiteColor};
&:hover{
  opacity: 1;
}


`


