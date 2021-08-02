import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './store';

import Home from './components/Home'
import Profile from './components/Profile'
import { RedirectWithStatus } from './components/FallBack'
import TopNavigator from './components/common/TopNavigator';
import Mask from './components/Mask';
import Chatbot from './components/Chatbot';
import DKT from './components/DKT';

import "bootswatch/dist/flatly/bootstrap.min.css";
import './index.css';
import './markdown.css';
import './page.css';

const store = createStore(rootReducer)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <TopNavigator />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/mask" component={Mask} />
          <Route path="/chatbot" component={Chatbot} />
          <Route path="/dkt" component={DKT} />
          <RedirectWithStatus status={404} from={"*"} to="/fallback" />
        </Switch>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// 404 페이지 관련해서는 추후 아래 링크 참고
// https://reactrouter.com/web/guides/quick-start

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
