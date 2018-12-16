import {
  GET_SHOP,
  EDIT_SHOP_SUCCESS,
  EDIT_SHOP_FAILURE,
  ARCHIVE_SHOP,
  GET_ROLES,
  GET_STAFFS,
  ADD_STAFF_SUCCESS,
  ADD_STAFF_FAILURE,
  EDIT_STAFF_SUCCESS,
  EDIT_STAFF_FAILURE,
  ARCHIVE_STAFF,
  GET_PLATFORMS
} from '../actions/shop';

let initial = {
  shop: {},
  editShopError: false,
  roles: [],
  staffs: [],
  addStaffError: false,
  editStaffError: false,
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
    case GET_ROLES:
      return {...state, roles: action.payload};
    case GET_STAFFS:
      return {...state, staffs: action.payload};
    case ADD_STAFF_SUCCESS:
      return {...state, staffs: action.payload, addStaffError: false};
    case ADD_STAFF_FAILURE:
      return {...state, addStaffError: true};
    case EDIT_STAFF_SUCCESS:
      return {...state, staffs: action.payload, editStaffError: false};
    case EDIT_STAFF_FAILURE:
      return {...state, editStaffError: true};
    case ARCHIVE_STAFF:
      return {...state, staffs: action.payload};
    case GET_PLATFORMS:
      return {...state, platforms: action.payload};
    default:
      return state;
  }
};