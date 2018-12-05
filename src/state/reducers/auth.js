import {
  GET_USER,
  NOT_LOGGED_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SIGNUP_SHOP_SUCCESS,
  SIGNUP_SHOP_FAILURE,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
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
      return {...state};
    case LOGIN_FAILURE:
      return {...state, loginError: true};
    case LOGOUT:
      return {...state, user: {}, authorized: false};
    case SIGNUP_SHOP_SUCCESS:
      return {...state, shop_id: action.payload, signupUserStep: true};
    case SIGNUP_SHOP_FAILURE:
      return {...state, signupShopError: true};
    case SIGNUP_USER_SUCCESS:
      return {...state};
    case SIGNUP_USER_FAILURE:
      return {...state, signupUserError: true};
    case SIGNUP_RESET:
      return {...state, signupUserStep: false};
    default:
      return state;
  }
};