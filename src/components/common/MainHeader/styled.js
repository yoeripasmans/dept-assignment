import styled from 'styled-components';

import { ReactComponent as LogoIcon } from 'static/vectors/logo.svg';

export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: #fff;
`;

export const Header = styled.header`
  height: 100%;
  width: 100%;
  padding:0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLogo = styled(LogoIcon)`
  width: 50px;
`;
