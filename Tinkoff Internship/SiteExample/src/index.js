import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import store from './reducers/store';
import {routes} from "./App";


ReactDOM.render(<App />, document.getElementById('root'));

 // Чтобы создавать компоненты-контейнеры, которые подключены к хранилищу Redux
ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}>
        <App />
    </Router>
  </Provider>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
