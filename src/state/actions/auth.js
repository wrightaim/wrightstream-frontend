import Auth from '../models/auth';

export const GET_USER = 'GET_USER';
export const NOT_LOGGED_IN = 'NOT_LOGGED_IN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_RESET = 'LOGIN_RESET';
export const LOGOUT = 'LOGOUT';
export const SIGNUP_SHOP_SUCCESS = 'SIGNUP_SHOP_SUCCESS';
export const SIGNUP_SHOP_FAILURE = 'SIGNUP_SHOP_FAILURE';
export const SIGNUP_SHOP_RESET = 'SIGNUP_SHOP_RESET';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';
export const SIGNUP_USER_RESET = 'SIGNUP_USER_RESET';
export const SIGNUP_RESET = 'SIGNUP_RESET';
export const ARCHIVE_SHOP = 'ARCHIVE_SHOP'

export const getUser = () => {
  return async dispatch => {
    try {
      const token = await Auth.getUser();
      dispatch({type: GET_USER, payload: token});
    } catch (err) {
      dispatch({type: NOT_LOGGED_IN, payload: err});
    }
  };
};

export const login = (credentials, history) => {
  return async dispatch => {
    try {
      const payload = await Auth.login(credentials);
      dispatch({type: LOGIN_SUCCESS, payload});
      history.push('/');
    } catch (err) {
      dispatch({type: LOGIN_FAILURE, payload: err});
    }   
  };
};

export const loginReset = () => {
  return dispatch => {
    dispatch({type: LOGIN_RESET});
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch({type: LOGOUT});
  };
};

export const signupShop = shop => {
  return async dispatch => {
    try {
      const payload = await Auth.signupShop(shop);
      dispatch({type: SIGNUP_SHOP_SUCCESS, payload});
    } catch (err) {
      dispatch({type: SIGNUP_SHOP_FAILURE, payload: err});
    }
  };
};

export const signupShopReset = () => {
  return dispatch => {
    dispatch({type: SIGNUP_SHOP_RESET});
  };
};

export const signupUser = (user, shop_id, history) => {
  return async dispatch => {
    try {
      const payload = await Auth.signupUser(user, shop_id);
      dispatch({type: SIGNUP_USER_SUCCESS, payload});
      history.push('/login');
    } catch (err) {
      dispatch({type: SIGNUP_USER_FAILURE, payload: err});
    }
  };
};

export const signupUserReset = () => {
  return dispatch => {
    dispatch({type: SIGNUP_USER_RESET});
  };
};

export const signupReset = () => {
  return dispatch => {
    dispatch({type: SIGNUP_RESET});
  };
};