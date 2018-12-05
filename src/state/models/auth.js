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

  static login = async ({shop_username, email, password}) => {
    const login = await request('/auth/token', 'post', {shop_username, email, password});
    await localStorage.setItem('token', login.data.token);
    const token = await request('/auth/token');
    return token.data;
  };

  static signupShop = async newShop => {
    const shop = await request('/shops', 'post', newShop);
    return shop.data.data[0].id;
  };

  // static signupUser = async (newUser) => {
  //   const addShop = await request('/shops', 'post', newShop);
  //   const shop_id = addShop.data.data[0].id;
  //   const newStaff = await request(`/shops/${shop_id}/staff`, 'post', newUser);
  //   return newStaff.data;
  // };
};

export default Auth;
