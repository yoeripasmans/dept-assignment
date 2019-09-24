import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'styles/utils';

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  height: 50px;
  font-family: 'Teko';
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  font-style: normal;
  line-height: 2;
  text-align: center;
  color: #fff;
  background-color: #000;
  width: calc(100% - 40px);
  text-transform: uppercase;

  ${media.desktop`
    position: absolute;
    bottom: 50px;
    right: 120px;
    z-index: 5;
    width: 170px;
    height: 50px;
  `}
`;

const Button = () => {
  return (
    <StyledLink to="/">View Case</StyledLink>
  );
};

export default Button;
