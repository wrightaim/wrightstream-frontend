import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../actions/auth';

let initial = {
  user: {},
  authorized: false,
  loginError: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {...state, user: action.payload, authorized: true};
    case LOGIN_FAILURE:
      return {...state, loginError: true};
    default:
      return state;
  }
};
