import request from '../../helpers/request';

class Auth {
  static _authenticatedRequest = async () => {
    const authToken = await request('/auth/token');
    return authToken.data.shop_id;
  };

  static login = async ({shop_username, email, password}) => {
    const login = await request('/auth/token', 'post', {shop_username, email, password});
    await localStorage.setItem('token', login.data.token);
    const token = await request('/auth/token');
    return token.data;
  };
};

export default Auth;
