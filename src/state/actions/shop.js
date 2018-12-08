import Shop from '../models/shop';

export const GET_SHOP = 'GET_SHOP';
export const EDIT_SHOP_SUCCESS = 'EDIT_SHOP_SUCCESS';
export const EDIT_SHOP_FAILURE = 'EDIT_SHOP_FAILURE';

export const getShop = () => {
  return async dispatch => {
    const payload = await Shop.getShop();
    dispatch({type: GET_SHOP, payload});
  };
};

export const editShop = (shop) => {
  return async dispatch => {
    try {
      const payload = await Shop.editShop(shop);
      dispatch({type: EDIT_SHOP_SUCCESS, payload});
    } catch (err) {
      dispatch({type: EDIT_SHOP_FAILURE, payload: err});
    }
  };
};