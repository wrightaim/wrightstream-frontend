import Shop from '../models/shop';

export const GET_SHOP = 'GET_SHOP';
export const EDIT_SHOP_SUCCESS = 'EDIT_SHOP_SUCCESS';
export const EDIT_SHOP_FAILURE = 'EDIT_SHOP_FAILURE';
export const GET_PLATFORMS = 'GET_PLATFORMS';
export const GET_STAFFS = 'GET_STAFFS';
export const GET_ROLES = 'GET_ROLES';

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

export const getStaffs = () => {
  return async dispatch => {
    const payload = await Shop.getStaffs();
    dispatch({ type: GET_STAFFS, payload });
  };
};

export const getRoles = () => {
  return async dispatch => {
    const payload = await Shop.getRoles();
    dispatch({ type: GET_ROLES, payload });
  };
};

export const getPlatforms = () => {
  return async dispatch => {
    const payload = await Shop.getPlatforms();
    dispatch({ type: GET_PLATFORMS, payload });
  };
};