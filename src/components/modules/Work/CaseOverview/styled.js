import styled from 'styled-components';

export const CaseList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const CaseItem = styled.li`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  margin: 30px 0 50px;
`;

export const CaseImage = styled.img`
  object-fit: cover;
  height: 286px;
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
`;
