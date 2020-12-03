import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CountryPage from './country_page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Routes } from './Route';

import './index.scss';
import { GetRoute } from './helper';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route exact path={Routes.Main} component={App} />
        <Route path={GetRoute(Routes.CountryData, 'name')} component={CountryPage} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
