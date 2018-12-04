import {
  GET_USER,
  NOT_LOGGED_IN,
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
    case GET_USER:
      return {...state, user: action.payload, authorized: true};
    case NOT_LOGGED_IN:
      return {...state, authorized: false};
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