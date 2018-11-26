// REACT
import React from 'react';
import ReactDOM from 'react-dom';

// REDUX
import { Provider } from 'react-redux';
import store from './store';

// CSS
//import 'bulma/css/bulma.min.css';
import './stylesheets/css/main.css';
//import './css/linearicons.css';

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
