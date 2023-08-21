import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

import bgDesc1 from '../../images/background/bg_desctop1x.png';
import bgDesc2 from '../../images/background/bg_desctop2x.png';
import bgTabl1 from '../../images/background/bg_tablet1x.png';
import bgTabl2 from '../../images/background/bg_tablet2x.png';
import bgMob1 from '../../images/background/bg_mobile1x.png';
import bgMob2 from '../../images/background/bg_mobile2x.png';

import imgDesc1 from '../../images/desctop/desctop1x.png';
import imgDesc2 from '../../images/desctop/desctop2x.png';
import imgTab1 from '../../images/tablet/tablet1x.png';
import imgTab2 from '../../images/tablet/tablet2x.png';
import imgMob1 from '../../images/mobile/mobile1x.png';
import imgMob2 from '../../images/mobile/mobile2x.png';

export const MainContainer = styled.div`
position: relative;
  padding-top: 60px;
  background-image: url('${bgMob1}');
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${bgMob2}');
  }

  @media screen and (${devices.tablet}) {
    background-image: url('${bgTabl1}');
    padding-top: 80px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bgTabl2}');
    }
  }

  @media screen and (${devices.desktop}) {
    background-image: url('${bgDesc1}');
    padding-top: 188px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bgDesc2}');
    }
  }
`;
export const Images = styled.img`
  margin-top: 20px;
  content: url('${imgMob1}');

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    content: url('${imgMob2}');
  }

  @media screen and (${devices.tablet}) {
    content: url('${imgTab1}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${imgTab2}');
    }
  }
  @media screen and (${devices.desktop}) {
    content: url('${imgDesc1}');
    position: absolute;
    right: 0;
    top: 36px;
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${imgDesc2}');
    }
  }
`;

export const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  @media screen and (${devices.tablet}) {
    padding-left: 20px;
    width: 588px;
    font-size: 68px;
    font-weight: 600;
  }

  @media screen and (${devices.desktop}) {
    font-size: 68px;
    font-weight: 800;
  }
`;
