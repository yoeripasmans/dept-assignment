import React from 'react';
import { MenuButton, MenuText, MenuIcon } from './styled';

const Menu = () => {
  return (
    <MenuButton>
      <MenuText>Menu</MenuText>
      <MenuIcon>
        <span></span>
        <span></span>
      </MenuIcon>
    </MenuButton>
  );
};

export default Menu;
