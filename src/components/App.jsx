import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

import Work from 'components/modules/Work';
import MainHeader from 'components/common/MainHeader';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainHeader />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Work} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
