import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '../../constants/colors';
import { devices } from '../../constants/breakpoints';

import bgMobile1x from '../../images/background/bg_mobile1x.png';
import bgMobile2x from '../../images/background/bg_mobile2x.png';
import bgtablet1x from '../../images/background/bg_tablet1x.png';
import bgtablet2x from '../../images/background/bg_tablet2x.png';
import bg_desctop1x from '../../images/background/bg_desctop1x.png';
import bg_desctop2x from '../../images/background/bg_desctop2x.png';

import cat_x1 from '../../images/notFound/mobile/cat_x1.png';
import cat_x2 from '../../images/notFound/mobile/cat_x2.png';
import cat_tablet1x from '../../images/notFound/tablet/cat_tabletx1.png';
import cat_tabletx2 from '../../images/notFound/tablet/cat_tabletx2.png';
import cat_desktopx1 from '../../images/notFound/desktop/cat_desktopx1.png';
import cat_desktopx2 from '../../images/notFound/desktop/cat_desktopx2.png';

export const Container = styled.div`
  padding-top: 80px;
  background-image: url(${bgMobile1x});
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgMobile2x});
  }

  @media screen and (${devices.tablet}) {
    padding-top: 60px;
    background-image: url(${bgtablet1x});
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bgtablet2x});
  }

  @media screen and (${devices.desktop}) {
    padding-top: 60px;
    background-image: url(${bg_desctop1x});
  }

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg_desctop2x});
  }
`;

export const Banner = styled.h1`
  display: flex;
  width: 280px;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  color: #000;
  font-size: 24px;
  font-weight: 700;

  @media screen and (${devices.tablet}) {
    width: 450px;
    color: ${colors.textColor};
    font-size: 32px;
    font-weight: 600;
    line-height: 41.6px;
  }
`;

export const Ooops = styled.pre`
  margin: 0;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  line-height: 41.6px;

  @media screen and (${devices.tablet}) {
    color: ${colors.textColor};
    font-size: 32px;
    font-weight: 600;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  padding-top: 80px;
  align-items: baseline;
  justify-content: center;

  @media screen and (${devices.tablet}) {
    justify-content: normal;
  }

  @media screen and (${devices.desktop}) {
    justify-content: center;
  }
`;

export const FourLeft = styled.div`
  width: 80px;
  color: ${colors.blueColor};
  transform: rotate(-11.342deg);
  font-size: 129.782px;
  font-weight: 800;

  @media screen and (${devices.tablet}) {
    margin-right: 110px;
    font-size: 326.31px;
  }

  @media screen and (${devices.desktop}) {
    margin-right: 150px;
    font-size: 381.004px;
  }
`;

export const OrangeAndCat = styled.div`
  width: 111px;
  height: 112px;
  background-color: ${colors.accentColor};
  border-radius: 50%;
  background-image: url(${cat_x1});
  background-repeat: no-repeat;
  background-position: 100% 100%;
  overflow: hidden;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${cat_x2});
    background-size: 106px 107px;
    background-position: 200% 100%;
  }

  @media screen and (${devices.tablet}) {
    width: 311px;
    height: 307px;
    background-image: url(${cat_tablet1x});
    background-position: 75% 20%;
    background-size: 250.083px 330.589px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${cat_tabletx2});
    }
  }

  @media screen and (${devices.desktop}) {
    width: 341px;
    height: 347px;
    background-image: url(${cat_desktopx1});
    background-position: 95% 10%;
    background-size: 292px 356px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${cat_desktopx2});
    }
  }
`;

export const FourRight = styled.div`
  width: 80px;
  margin-left: 5px;
  color: ${colors.blueColor};
  transform: rotate(24.226deg);
  font-size: 129.782px;
  font-weight: 800;

  @media screen and (${devices.tablet}) {
    display: table;
    font-size: 326.31px;
    line-height: 424.203px;
  }

  @media screen and (${devices.desktop}) {
    font-size: 381.004px;
  }
`;

export const Button = styled(Link)`
  display: flex;
  width: 248px;
  height: 40px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 8px 28px;
  background-color: ${colors.blueColor};
  justify-content: center;
  align-items: flex-end;
  gap: 12px;
  border: none;
  border-radius: 40px;

  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.64px;
  color: ${colors.secondaryTextColor};

  @media screen and (${devices.tablet}) {
    margin-top: 70px;
  }

  @media screen and (${devices.desktop}) {
    margin-top: 18px;
  }
`;
