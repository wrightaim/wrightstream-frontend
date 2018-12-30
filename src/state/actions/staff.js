import Staff from '../models/staff';

export const GET_ROLES = 'GET_ROLES';
export const GET_STAFFS = 'GET_STAFFS';
export const ADD_STAFF_SUCCESS = 'ADD_STAFF_SUCCESS';
export const ADD_STAFF_FAILURE = 'ADD_STAFF_FAILURE';
export const ADD_STAFF_RESET = 'ADD_STAFF_RESET';
export const EDIT_STAFF_SUCCESS = 'EDIT_STAFF_SUCCESS';
export const EDIT_STAFF_FAILURE = 'EDIT_STAFF_FAILURE';
export const EDIT_STAFF_RESET = 'EDIT_STAFF_RESET';
export const ARCHIVE_STAFF_SUCCESS = 'ARCHIVE_STAFF_SUCCESS';
export const ARCHIVE_STAFF_FAILURE = 'ARCHIVE_STAFF_FAILURE';
export const ARCHIVE_STAFF_RESET = 'ARCHIVE_STAFF_RESET';
export const RESTORE_STAFF = 'RESTORE_STAFF';

export const getRoles = () => {
  return async dispatch => {
    const payload = await Staff.getRoles();
    dispatch({type: GET_ROLES, payload});
  };
};

export const getStaffs = () => {
  return async dispatch => {
    const payload = await Staff.getStaffs();
    dispatch({type: GET_STAFFS, payload});
  };
};

export const addStaff = staff => {
  return async dispatch => {
    try {
      const payload = await Staff.addStaff(staff);
      dispatch({type: ADD_STAFF_SUCCESS, payload});
    } catch (err) {
      dispatch({type: ADD_STAFF_FAILURE, payload: err});
    }
  };
};

export const addStaffReset = () => {
  return dispatch => {
    dispatch({type: ADD_STAFF_RESET});
  };
};

export const editStaff = (staff, staff_id) => {
  return async dispatch => {
    try {
      const payload = await Staff.editStaff(staff, staff_id);
      dispatch({type: EDIT_STAFF_SUCCESS, payload});
    } catch (err) {
      dispatch({type: EDIT_STAFF_FAILURE, payload: err});
    }
  };
};

export const editStaffReset = () => {
  return dispatch => {
    dispatch({type: EDIT_STAFF_RESET});
  };
};

export const archiveStaff = staff_id => {
  return async dispatch => {
    try {
      const payload = await Staff.archiveStaff(staff_id);
      dispatch({type: ARCHIVE_STAFF_SUCCESS, payload});
    } catch (err) {
      dispatch({type: ARCHIVE_STAFF_FAILURE, payload: err});
    }
  };
};

export const archiveStaffReset = () => {
  return dispatch => {
    dispatch({type: ARCHIVE_STAFF_RESET});
  };
};

export const restoreStaff = staff_id => {
  return async dispatch => {
    const payload = await Staff.restoreStaff(staff_id);
    dispatch({type: RESTORE_STAFF, payload});
  };
};