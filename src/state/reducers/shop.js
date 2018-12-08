import {
  GET_SHOP,
  EDIT_SHOP_SUCCESS,
  EDIT_SHOP_FAILURE
} from '../actions/shop';

let initialState = {
  shop: {},
  editShopError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SHOP:
      return {...state, shop: action.payload};
    case EDIT_SHOP_SUCCESS:
      return {...state, shop: action.payload, editShopError: false};
    case EDIT_SHOP_FAILURE:
      return {...state, editShopError: true};
    default:
      return state;
  }
};
