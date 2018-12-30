import {applyMiddleware, createStore} from 'redux';
import rootReducer from './state/reducers';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default (initial) => {
  return createStore(
    rootReducer,
    applyMiddleware(logger, thunkMiddleware)
  );
}