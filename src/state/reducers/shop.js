import {
  GET_SHOP,
  EDIT_SHOP_SUCCESS,
  EDIT_SHOP_FAILURE,
  ARCHIVE_SHOP,
  GET_STAFFS,
  GET_ROLES,
  GET_PLATFORMS
} from '../actions/shop';

let initial = {
  shop: {},
  editShopError: false,
  staffs: [],
  editStaffError: false,
  roles: [],
  platforms: []
};

export default (state = initial, action) => {
  switch (action.type) {
    case GET_SHOP:
      return {...state, shop: action.payload};
    case EDIT_SHOP_SUCCESS:
      return {...state, shop: action.payload, editShopError: false};
    case EDIT_SHOP_FAILURE:
      return {...state, editShopError: true};
    case ARCHIVE_SHOP:
      return {...state, shop: action.payload};
    case GET_STAFFS:
      return {...state, staffs: action.payload};
    case GET_ROLES:
      return {...state, roles: action.payload};
    case GET_PLATFORMS:
      return {...state, platforms: action.payload};
    default:
      return state;
  }
};
