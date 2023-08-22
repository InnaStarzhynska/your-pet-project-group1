import styled from 'styled-components';
import { devices } from '../../constants/breakpoints';

import logoDesc1x from '../../images/header/logo_desctop@1x.png';
import logoDesc2x from '../../images/header/logo_desctop@2x.png';
import logoTab1x from '../../images/header/logo_tablet@1x.png';
import logoTab2x from '../../images/header/logo_tablet@2x.png';
import logoMob1x from '../../images/header/logo_mobile@1x.png';
import logoMob2x from '../../images/header/logo_mobile@2x.png';

export const Wrapper = styled.div`
  position: relative;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  align-items: center;

  @media only screen and ${devices.tablet} {
    padding-top: 24px;
  }
  @media only screen and ${devices.desktop} {
    padding-top: 20px;
  }
`;

export const Logo = styled.img`
  display: flex;
  width: 116px;
  content: url('${logoMob1x}');

  @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
  content: url('${logoMob2x}');

  @media screen and (${devices.tablet}) {
    content: url('${logoTab1x}');
    width: 162px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${logoTab2x}');
    }
  }

  @media screen and (${devices.desktop}) {
    content: url('${logoDesc1x}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      content: url('${logoDesc2x}');
    }
}
`;
