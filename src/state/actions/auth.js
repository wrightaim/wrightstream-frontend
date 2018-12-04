import Auth from '../models/auth';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = ({shop_username, email, password}, history) => {
  return async dispatch => {
    try {
      const payload = await Auth.login({shop_username, email, password});
      dispatch({type: LOGIN_SUCCESS, payload});
      history.push('/settings');
    } catch (err) {
      dispatch({type: LOGIN_FAILURE, payload: err});
      history.push('/login');
    }
  };
};
