import { styled } from 'styled-components';
import { devices } from '../../constants/breakpoints';
export const ItemNews = styled.li`
  position: relative;
  width: 100%;
  height: 578px;
  border-radius: 20px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

  &:before {
    position: absolute;
    content: '';
    top: -20px;
    display: block;
    height: 8px;
    width: 100%;
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    border-radius: 40px;
  }

  @media screen and (${devices.tablet}) {
    height: 556px;
    flex-basis: calc((100% - 32px) / 2);

    &:before {
      top: -19px;
    }
  }

  @media screen and (${devices.desktop}) {
    height: 534px;
    flex-basis: calc((100% - 62px) / 3);
  }
`;

export const ImageNews = styled.img`
  margin-bottom: 16px;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  height: 252px;

  @media screen and (${devices.tablet}) {
  }

  @media screen and (${devices.desktop}) {
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 12px;
  padding-right: 12px;

  @media screen and (${devices.tablet}) {
  }

  @media screen and (${devices.tablet}) {
  }
`;
export const TitleNews = styled.h3`
  text-align: left;
  font-size: 24px;
  line-height: 32.78px;
`;
export const TextNews = styled.p`
  font-size: 16px;
  line-height: 22px;
  margin-top: 16px;
  text-align: left;
  overflow: none;
  height: 110px;
  @media screen and (${devices.tablet}) {
    overflow: hidden;

    height: 132px;
  }

  @media screen and (${devices.desktop}) {
  }
`;
export const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
`;
export const ContainerInfo = styled.div`
  position: absolute;
  top: 545px;
  @media screen and (${devices.tablet}) {
    top: 527px;
  }

  @media screen and (${devices.desktop}) {
    top: 503px;
  }
`;
export const Date = styled.span`
  line-height: 22px;
  font-size: 16px;
  color: rgba(136, 136, 136, 1);
`;
export const LinkReadMore = styled.a`
  font-size: 16px;
  line-height: 22px;
  color: rgba(84, 173, 255, 1);
  margin-left: 90px;
  @media screen and (${devices.tablet}) {
    margin-left: 140px;
  }

  @media screen and (${devices.desktop}) {
    margin-left: 190px;
  }
`;
export const ButtonRead = styled.a`
  font-size: 16px;
  line-height: 22px;
  color: rgba(84, 173, 255, 1);
  @media screen and (${devices.tablet}) {
  }

  @media screen and (${devices.desktop}) {
  }
`;
