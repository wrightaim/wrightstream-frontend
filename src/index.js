// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import {Provider} from 'react-redux';
import store from './store';

// CSS
import './stylesheets/css/main.css';
import './stylesheets/css/linearicons.css';

// COMPONENTS
import App from './App';

// ==========

const storeInstance = store();

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);