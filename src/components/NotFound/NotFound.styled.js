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

import cardMobilex1 from '../../images/notFound/mobile/404_mobilex1.png';
import cardMobilex2 from '../../images/notFound/mobile/404_mobilex2.png';
import cardtabletx1 from '../../images/notFound/tablet/404_tabletx1.png';
import cardtabletx2 from '../../images/notFound/tablet/404_tabletx2.png';
import cardDesktopx1 from '../../images/notFound/desktop/404_desktopx1.png';
import cardDesktopx2 from '../../images/notFound/desktop/404_desktopx2.png';

export const Section = styled.section`
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

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bgtablet2x});
    }
  }

  @media screen and (${devices.desktop}) {
    padding-top: 60px;
    background-image: url(${bg_desctop1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg_desctop2x});
    }
  }
`;

export const Banner = styled.h2`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 280px;

  margin: 0 auto;

  font-size: 24px;
  font-weight: 700;
  color: #000;

  @media screen and (${devices.tablet}) {
    width: 450px;

    font-size: 32px;
    font-weight: 600;
    line-height: 41.6px;
    color: ${colors.textColor};
  }
`;

export const Span = styled.span`
  margin: 0;

  font-size: 24px;
  font-weight: 700;
  line-height: 41.6px;
  color: #000;

  @media screen and (${devices.tablet}) {
    font-size: 32px;
    font-weight: 600;
    color: ${colors.textColor};
  }
`;

export const Image = styled.img`
  width: 280px;
  height: 123px;
  margin: 80px auto 0;
  content: url(${cardMobilex1});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url('${cardMobilex2}');
  }

  @media screen and (${devices.tablet}) {
    width: 704px;
    height: 308px;
    content: url('${cardtabletx1}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      width: 704px;
      height: 308px;
      content: url('${cardtabletx2}');
    }
  }

  @media screen and (${devices.desktop}) {
    width: 822px;
    height: 360px;
    content: url('${cardDesktopx1}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${cardDesktopx2}');
    }
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: none;
  border-radius: 40px;

  width: 248px;
  height: 40px;

  margin: 0 auto;
  margin-top: 60px;
  padding: 8px 28px;

  background-color: ${colors.blueColor};

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
