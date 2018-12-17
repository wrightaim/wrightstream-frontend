import {
  GET_ROLES,
  GET_STAFFS,
  ADD_STAFF_SUCCESS,
  ADD_STAFF_FAILURE,
  ADD_STAFF_RESET,
  EDIT_STAFF_SUCCESS,
  EDIT_STAFF_FAILURE,
  EDIT_STAFF_RESET,
  ARCHIVE_STAFF_SUCCESS,
  ARCHIVE_STAFF_FAILURE,
  ARCHIVE_STAFF_RESET,
  RESTORE_STAFF
} from '../actions/staff';

let initial = {
  roles: [],
  staffs: [],
  addStaffError: false,
  editStaffError: false,
  archiveStaffError: false
};

export default (state = initial, action) => {
  switch (action.type) {
    case GET_ROLES:
      return {...state, roles: action.payload};
    case GET_STAFFS:
      return {...state, staffs: action.payload};
    case ADD_STAFF_SUCCESS:
      return {...state, staffs: action.payload, addStaffError: false};
    case ADD_STAFF_FAILURE:
      return {...state, addStaffError: true};
    case ADD_STAFF_RESET:
      return {...state, addStaffError: false};
    case EDIT_STAFF_SUCCESS:
      return {...state, staffs: action.payload, editStaffError: false};
    case EDIT_STAFF_FAILURE:
      return {...state, editStaffError: true};
    case EDIT_STAFF_RESET:
      return {...state, editStaffError: false};
    case ARCHIVE_STAFF_SUCCESS:
      return {...state, staffs: action.payload, archiveStaffError: false};
    case ARCHIVE_STAFF_FAILURE:
      return {...state, archiveStaffError: true};
    case ARCHIVE_STAFF_RESET:
      return {...state, archiveStaffError: false};
    case RESTORE_STAFF:
      return {...state, staffs: action.payload};
    default:
      return state;
  }
};