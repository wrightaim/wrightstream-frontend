// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {restoreStaff} from '../../../../../../../../state/actions/staff';

// ==========

class RestoreStaff extends React.Component {
  restoreStaff = async event => {
    event.preventDefault();
    await this.props.restoreStaff(this.props.staff.id);
    this.props.toggle();
  };

  render () {
    const staff = {
      first_name: this.props.staff.first_name,
      last_name: this.props.staff.last_name
    };
    return (
      <form className="has-text-centered" onSubmit={this.restoreStaff}>
        <p>Do you want to restore {staff.first_name} {staff.last_name}?</p>
        <div className="buttons">
          <span className="button" onClick={this.props.toggle}>Cancel</span>
          <button className="button is-success">Restore</button>
        </div>
      </form>
    );
  };
};

const mapStateToProps = state => ({
  staffs: state.staff.staffs
});

const mapDispatchToProps = dispatch => bindActionCreators({
  restoreStaff
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RestoreStaff);