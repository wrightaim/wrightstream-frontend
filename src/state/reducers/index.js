import auth from './auth';
import shop from './shop';
import staff from './staff';

import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  auth,
  shop,
  staff,
  form: formReducer
});

export default rootReducer;