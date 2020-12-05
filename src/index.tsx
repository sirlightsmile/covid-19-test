import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CountryPage from './country_page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Routes } from './enum/route';
import { GetRoute } from './helper';
import { RecoilRoot } from 'recoil';
import ErrorBoundary from './error_boundary';
import './styles/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <RecoilRoot>
          <BrowserRouter>
            <Switch>
              <Route exact path={Routes.Main} component={App} />
              <Route path={GetRoute(Routes.CountryData, 'name')} component={CountryPage} />
            </Switch>
          </BrowserRouter>
        </RecoilRoot>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);
