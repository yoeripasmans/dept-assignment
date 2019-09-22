import React from 'react';
import { ReactComponent as Logo } from 'static/vectors/logo.svg';

import Menu from './Menu';

const MainHeader = () => {
  return (
    <header>
      <Logo />
      <Menu />
    </header>
  );
};

export default MainHeader;
