import React, { useState, useEffect } from 'react';

import Prismic from 'prismic-javascript';

import Loader from 'components/common/Loader';
import IntroductionHero from 'components/common/IntroductionHero';
import CaseOverview from './CaseOverview';

const apiEndpoint = process.env.REACT_APP_API_ENDPOINT;
const accessToken = process.env.REACT_APP_API_ACCESTOKEN;

const Client = Prismic.client(apiEndpoint, { accessToken });

const Work = () => {
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
  });

  return (
    <>
      { docs ? (
        <>
        <IntroductionHero />
        <CaseOverview data={docs} />
        </>
      ) : <Loader />
      }
    </>
  );
};

export default Work;
