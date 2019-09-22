import React from 'react';
import GlobalStyle from 'styles';

import MainHeader from 'components/modules/MainHeader';
import IntroductionHero from 'components/modules/IntroductionHero';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainHeader />
      <IntroductionHero />
    </>
  );
};

export default App;
