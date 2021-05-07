import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home'
import FallBack from './pages/FallBack'
import TopNavigator from './components/TopNavigator';

import "bootswatch/dist/flatly/bootstrap.min.css";
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopNavigator />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/" exact component={Home} />
        <Route component={FallBack} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
