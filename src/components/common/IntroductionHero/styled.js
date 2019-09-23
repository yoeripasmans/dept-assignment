import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 320px;
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
`;

export const Title = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  z-index: 3;
  font-family: Teko;
  font-size: 170px;
  font-weight: normal;
`;
