import {
    MyPetCard,
    InfoWrap,
    PetImage,
    NameWrapper,
    SubTitle,
    InfoItem,
    PetComment,
    InfoText,
    DeleteBtn
} from './PetsItem.styled';
import avatarDefault2x from '../../../images/Photo_default@2x.jpg';
import SvgIcon from 'components/SvgIcon/SvgIcon';

export const PetsItem = () => {
    return (
        <>
                <MyPetCard>
                    <PetImage
                        src={avatarDefault2x}
                        alt="mypet's avatar"
                    />
                    <InfoWrap style={{ maxWidth: 580 }}>
                        <NameWrapper>
                            <InfoItem>
                                <SubTitle>Name:&nbsp;</SubTitle>
                                <InfoText>Pet's name</InfoText>
                            </InfoItem>
                            <DeleteBtn type="button">
                            <SvgIcon id = {'icon-trash-2'} className={'icon-trash-2'}/>
                            </DeleteBtn>
                        </NameWrapper>
                        <InfoItem>
                            <SubTitle>Date of birth:&nbsp; </SubTitle>
                            <InfoText>dd.mm.yyy</InfoText>
                        </InfoItem>
                        <InfoItem>
                                <SubTitle>Type:&nbsp;</SubTitle>
                                <InfoText>Type</InfoText>
                            </InfoItem>
                        <InfoItem>
                            <PetComment>
                                Comments:&nbsp;
                                <InfoText>Comments</InfoText>
                            </PetComment>
                        </InfoItem>
                    </InfoWrap>
                </MyPetCard>
            {/* modalka */}
        </>
    );
};

export default PetsItem;