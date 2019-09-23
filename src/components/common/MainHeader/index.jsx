import React from 'react';

import { Header, HeaderContainer, StyledLogo } from './styled';

import Menu from './Menu';

const MainHeader = () => {
  return (
    <HeaderContainer>
      <Header>
        <StyledLogo />
        <Menu />
      </Header>
    </HeaderContainer>
  );
};

export default MainHeader;
