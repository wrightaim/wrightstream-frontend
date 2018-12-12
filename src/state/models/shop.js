import request from '../../helpers/request';
import Auth from './auth';

class Shop {
  static getShop = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const response = await request(`/shops/${shop_id}`);
    return response.data.data;
  };

  static editShop = async shop => {
    const shop_id = await Auth._authenticatedRequest();
    await request(`/shops/${shop_id}`, 'put', shop);
    return Shop.getShop();
  };
  
  static getStaffs = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const staffs = await request(`/shops/${shop_id}/staff`);
    return staffs.data.data;
  };

  static getPlatforms = async () => {
    const platforms = await request(`/platforms`);
    return platforms.data.data;
  };
};

export default Shop;