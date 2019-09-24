import styled from 'styled-components';
import { media } from 'styles/utils';

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 320px;

  ${media.desktop`
    height: 100vh;
  `}
`;

export const Container = styled.section`
  position: relative;
  width: 100%;
`;

export const Image = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const Title = styled.h1`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  z-index: 3;
  font-family: Teko;
  font-size: 170px;
  font-weight: normal;
  z-index: 2;
  text-transform: uppercase;

  ${media.desktop`
    font-size: 400px;
    top: 45%;
    left: 35%;
  `}
`;
