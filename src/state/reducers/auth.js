import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
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
    case LOGOUT:
      return {...state, user: {}, authorized: false};
    default:
      return state;
  }
};