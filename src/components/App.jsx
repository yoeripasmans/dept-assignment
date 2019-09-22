import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import GlobalStyle from 'styles';

import Home from 'components/modules/Home';
import MainHeader from 'components/common/MainHeader';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainHeader />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
