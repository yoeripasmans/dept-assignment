import React, { useState, useEffect } from 'react';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';

import Loader from 'components/common/Loader';

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
        <ul>
          {docs.map((caseItem) =>
          <li key={caseItem.id}>
            <img alt="cover" src={caseItem.data.image.url} />
            <span>{RichText.asText(caseItem.data.client_name)}</span>
            <h3>{RichText.asText(caseItem.data.title)}</h3>
          </li>)}
        </ul>
      )
        : <Loader />
      }
    </main>
  );
};

export default CaseOverview;
