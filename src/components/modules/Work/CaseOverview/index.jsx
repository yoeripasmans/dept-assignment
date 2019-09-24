import React from 'react';
import PT from 'prop-types';

import { RichText } from 'prismic-reactjs';

import {
  CaseList,
  CaseItem,
  CaseImage,
  CaseTitle,
  CaseClient,
  StyledLink,
} from './styled';

const CaseOverview = ({ data }) => {
  return (
    <main>
      <section>
          <CaseList>
            {data.map((caseItem) =>
            <CaseItem key={caseItem.id}>
              <StyledLink to={`work/${caseItem.id}`}>
                <CaseImage alt="cover" src={caseItem.data.image.url} />
                <CaseClient>{RichText.asText(caseItem.data.client_name)}</CaseClient>
                <CaseTitle>{RichText.asText(caseItem.data.title)}</CaseTitle>
              </StyledLink>
            </CaseItem>)}
          </CaseList>
      </section>
    </main>
  );
};

CaseOverview.propTypes = {
  data: PT.array,
};

export default CaseOverview;
