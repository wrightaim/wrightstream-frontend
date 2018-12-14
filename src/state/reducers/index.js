import auth from './auth';
import shop from './shop';

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  auth,
  shop,
  form: formReducer
});

export default rootReducer;