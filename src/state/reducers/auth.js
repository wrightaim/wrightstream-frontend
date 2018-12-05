import {
  GET_USER,
  NOT_LOGGED_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  SIGNUP_SHOP_SUCCESS,
  SIGNUP_SHOP_FAILURE
} from '../actions/auth';

let initial = {
  user: {},
  authorized: false,
  loginError: false,
  shop_id: null,
  signupShopError: false,
  signupUser: false,
  signupUserError: false
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
    case SIGNUP_SHOP_SUCCESS:
      return {...state, shop_id: action.payload, signupUser: true};
    case SIGNUP_SHOP_FAILURE:
      return {...state, signupShopError: true};
    default:
      return state;
  }
};