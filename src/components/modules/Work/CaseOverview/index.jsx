import React, { useState, useEffect } from 'react';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';

import Loader from 'components/common/Loader';

import {
  CaseList,
  CaseItem,
  CaseImage,
  CaseTitle,
  CaseClient,
} from './styled';

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
const accessToken = process.env.REACT_APP_API_ACCESTOKEN;

const Client = Prismic.client(apiEndpoint, { accessToken });

const CaseOverview = () => {
  const [docs, setDocData] = useState(null);

  useEffect(() => {
  const fetchData = async () => {
    const response = await Client.query(
      Prismic.Predicates.at('document.type', 'case')
    );
    if (response) {
      setDocData(response.results);
    }
  };
  fetchData();
}, []);

  return (
    <main>
      { docs ? (
        <CaseList>
          {docs.map((caseItem) =>
          <CaseItem key={caseItem.id}>
            <CaseImage alt="cover" src={caseItem.data.image.url} />
            <CaseClient>{RichText.asText(caseItem.data.client_name)}</CaseClient>
            <CaseTitle>{RichText.asText(caseItem.data.title)}</CaseTitle>
          </CaseItem>)}
        </CaseList>
      )
        : <Loader />
      }
    </main>
  );
};

export default CaseOverview;
