import styled from 'styled-components';

export const Img = styled.img`
position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background: '#fff';
  backdrop-filter: blur(4px);
`;
