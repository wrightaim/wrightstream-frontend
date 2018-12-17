import request from '../../helpers/request';
import Auth from './auth';

class Staff {
  static getRoles = async () => {
    const roles = await request(`/roles`);
    return roles.data.data;
  };

  static getStaffs = async () => {
    const shop_id = await Auth._authenticatedRequest();
    const staffs = await request(`/shops/${shop_id}/staff`);
    const staffsSortedByName = await staffs.data.data.sort((a, b) => a.first_name.localeCompare(b.first_name));
    const staffsSortedByRole = await staffsSortedByName.sort((a, b) => a.role_id.toString().localeCompare(b.role_id.toString()));
    return staffsSortedByRole;
  };

  static addStaff = async staff => {
    const shop_id = await Auth._authenticatedRequest();
    await request(`/shops/${shop_id}/staff`, 'post', staff);
    return Shop.getStaffs();
  };

  static editStaff = async (staff, staff_id) => {
    const shop_id = await Auth._authenticatedRequest();
    await request(`/shops/${shop_id}/staff/${staff_id}`, 'put', staff);
    return Shop.getStaffs();
  };

  static archiveStaff = async staff_id => {
    const shop_id = await Auth._authenticatedRequest();
    await request(`/shops/${shop_id}/staff/${staff_id}`, 'put', {archived: true});
    return Shop.getStaffs();
  };

  static restoreStaff = async staff_id => {
    const shop_id = await Auth._authenticatedRequest();
    await request(`/shops/${shop_id}/staff/${staff_id}`, 'put', {archived: false});
    return Shop.getStaffs();
  };
};

export default Staff;