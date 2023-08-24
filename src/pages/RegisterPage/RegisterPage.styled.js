import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';
import bgDesc1 from '../../images/background/bg_desctop1x.png';
import bgDesc2 from '../../images/background/bg_desctop2x.png';
import bgTabl1 from '../../images/background/bg_tablet1x.png';
import bgTabl2 from '../../images/background/bg_tablet2x.png';
import bgMob1 from '../../images/background/bg_mobile1x.png';
import bgMob2 from '../../images/background/bg_mobile2x.png';

export const StyledSection = styled.section`
padding: 40px 0 34px;
background-image: url('${bgMob1}');
background-size: cover;

@media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${bgMob2}');
  }

@media screen and (${devices.tablet}) {
padding: 80px 0 247px;
background-image: url('${bgTabl1}');
background-size: cover;

@media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bgTabl2}');
    }

}

@media screen and (${devices.desktop}) {
  padding: 80px 0 75px;
    background-image: url('${bgDesc1}');
    
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bgDesc2}');
    }
  }
`;