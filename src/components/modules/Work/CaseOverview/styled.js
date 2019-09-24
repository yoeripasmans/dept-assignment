import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from 'styles/utils';

export const CaseList = styled.ul`
  margin: 0;
  padding: 0;

  ${media.tablet`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  `}
`;

export const CaseItem = styled.li`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 30px 0 50px;

  ${media.tablet`
  width: calc(50% - 15px);
  `}
`;

export const CaseImage = styled.img`
  object-fit: cover;
  height: 286px;
  width: 100%;

  ${media.tablet`
  height: 637px;
  `}
`;

export const CaseTitle = styled.h3`
  font-family: Teko;
  font-size: 30px;
  font-weight: normal;
  margin: 10px 0 0 0;
  line-height: 1.07;
`;

export const CaseClient = styled.span`
  font-size: 14px;
  margin: 20px 0 10px 0;
  display: block;
  color: #939393;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000;

  &:focus, &:hover, &:visited, &:link, &:active {
     text-decoration: none;
  }
`;
