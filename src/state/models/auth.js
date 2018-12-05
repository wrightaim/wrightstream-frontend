import request from '../../helpers/request';

class Auth {
  static _authenticatedRequest = async () => {
    const authToken = await request('/auth/token');
    return authToken.data.shop_id;
  };
  
  static getUser = async () => {
    const token = await request('/auth/token');
    return token.data;
  };

  static login = async credentials => {
    const login = await request('/auth/token', 'post', credentials);
    await localStorage.setItem('token', login.data.token);
    const token = await request('/auth/token');
    return token.data;
  };

  static signupShop = async shop => {
    const newShop = await request('/shops', 'post', shop);
    return newShop.data.data[0].id;
  };

  static signupUser = async (user, shop_id) => {
    const newUser = await request(`/shops/${shop_id}/staff`, 'post', user);
    return newUser.data;
  };
};

export default Auth;