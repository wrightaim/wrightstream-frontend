import {
  GET_USER,
  NOT_LOGGED_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_RESET,
  LOGOUT,
  SIGNUP_SHOP_SUCCESS,
  SIGNUP_SHOP_FAILURE,
  SIGNUP_SHOP_RESET,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_RESET,
  SIGNUP_RESET
} from '../actions/auth';

let initial = {
  user: {},
  authorized: false,
  loginError: false,
  shop_id: null,
  signupShopError: false,
  signupUserStep: false,
  signupUserError: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case GET_USER:
      return {...state, user: action.payload, authorized: true};
    case NOT_LOGGED_IN:
      return {...state, authorized: false};
    case LOGIN_SUCCESS:
      return {...state, user: action.payload, authorized: true, loginError: false};
    case LOGIN_FAILURE:
      return {...state, loginError: true};
    case LOGIN_RESET:
      return {...state, loginError: false};
    case LOGOUT:
      return {...state, user: {}, authorized: false};
    case SIGNUP_SHOP_SUCCESS:
      return {...state, shop_id: action.payload, signupUserStep: true, signupShopError: false};
    case SIGNUP_SHOP_FAILURE:
      return {...state, signupShopError: true};
    case SIGNUP_SHOP_RESET:
      return {...state, signupShopError: false};
    case SIGNUP_USER_SUCCESS:
      return {...state, signupUserError: false};
    case SIGNUP_USER_FAILURE:
      return {...state, signupUserError: true};
    case SIGNUP_USER_RESET:
      return {...state, signupUserError: false};
    case SIGNUP_RESET:
      return {...state, signupUserStep: false};
    default:
      return state;
  }
};