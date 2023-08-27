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
      top: -22px;
    }
  }

  @media screen and (${devices.desktop}) {
    height: 534px;
    flex-basis: calc((100% - 62px) / 3);
  }

  cursor: pointer;
`;

export const ImageNews = styled.img`
  margin-bottom: 16px;
  width: 100%;
  object-fit: cover;
  border-radius: 20px;
  @media screen and (${devices.tablet}) {
  }
  @media screen and (${devices.tablet}) {
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
`;
export const ContainerInfo = styled.div`
  display: flex;
  justify-content: space-between;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
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
`;
