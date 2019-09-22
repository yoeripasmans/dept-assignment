import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  width: 170px;
  height: 30px;
  font-family: MaisonNeue;
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  line-height: 2;
  text-align: center;
  color: #fff;
  background-color: #000;
`;

const Button = () => {
  return (
    <StyledLink to="/">View Case</StyledLink>
  );
};

export default Button;
