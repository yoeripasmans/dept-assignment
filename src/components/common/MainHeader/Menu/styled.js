import styled from 'styled-components';

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background-color: #fff;
`;

export const MenuText = styled.span`
  font-family: Teko;
  font-size: 18px;
  margin-right: 19px;
`;

export const MenuIcon = styled.span`
  width: 20px;
  height: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

    span {
      height: 2px;
      width: 20px;
      background-color: #000;
    }
`;
