import React from 'react'
import { render } from 'react-dom'
import { Router } from "react-router-dom";
import { Provider } from 'react-redux'
import App from './App'
import './index.css';
import configureStore from './configs/configureStore'
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory();
const store = configureStore()

render(
  
  <Provider store={store}>
    <Router history={browserHistory}>
    <App/>
    </Router>
  </Provider>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
