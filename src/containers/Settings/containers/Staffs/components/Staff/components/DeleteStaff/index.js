// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {archiveStaff, archiveStaffReset} from '../../../../../../../../state/actions/staff';
import {logout} from '../../../../../../../../state/actions/auth';

// ==========

class DeleteStaff extends React.Component {
  deleteStaff = async event => {
    event.preventDefault();
    await this.props.archiveStaff(this.props.staff.id);
    if (!this.props.archiveStaffError) this.props.toggle();
    if (this.props.staff.id === this.props.user.id) this.props.logout();
  };

  componentDidMount () {
    this.props.archiveStaffReset();
  };

  render () {
    const staff = {
      first_name: this.props.staff.first_name,
      last_name: this.props.staff.last_name
    };
    return (
      <form className="has-text-centered" onSubmit={this.deleteStaff}>
        <p>Are you sure you want to delete {staff.first_name} {staff.last_name}?</p>
        {
          this.props.archiveStaffError ? (
            <p className="help is-danger">
              Unable to delete only shop owner.
            </p>
          ) : null
        }
        <div className="buttons">
          <span className="button" onClick={this.props.toggle}>Cancel</span>
          <button className="button is-danger">Delete</button>
        </div>
      </form>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user,
  staffs: state.staff.staffs,
  archiveStaffError: state.staff.archiveStaffError
});

const mapDispatchToProps = dispatch => bindActionCreators({
  archiveStaff,
  archiveStaffReset,
  logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(DeleteStaff);