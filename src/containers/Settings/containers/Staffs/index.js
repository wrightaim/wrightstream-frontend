// REACT
import React from 'react';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getRoles, getStaffs, getStaffsArchived} from '../../../../state/actions/shop';

// COMPONENTS
import Staff from './components/Staff';
import AddStaff from './components/Staff/components/AddStaff';
import EditStaff from './components/Staff/components/EditStaff';
import DeleteStaff from './components/Staff/components/DeleteStaff';
import RestoreStaff from './components/Staff/components/RestoreStaff';

// ==========

class Staffs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal',
      action: '',
      staff: null,
      staffArchived: false
    };
  };

  toggle = (event, staff = null) => { 
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active',
        action: event.target.id,
        staff
      });
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal',
        action: '',
        staff: null
      });
    }
  };

  getStaffArchived = () => {
    this.setState({staffArchived: !this.state.staffArchived});
  };

  componentDidMount () {
    this.props.getRoles();
    this.props.getStaffs();
    this.props.getStaffsArchived();
  };

  render () {
    const staffs = !this.state.staffArchived ? this.props.staffs : this.props.staffs_archived;
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <div className="level">
              <div className="level-left">
                <div className="level-item">
                  <h1 className="title">Staff</h1>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <span className="button is-primary is-outlined" id="add-staff" onClick={this.toggle}>Add</span>
                </div>
              </div>
            </div>
            <hr />
            <div id="staff">
              <div className="columns">
                {
                  staffs.map((staff, i) => {
                    return (
                      <Staff key={i} staff={staff} roles={this.props.roles} toggle={this.toggle} />
                    );
                  })
                }
              </div>
              <hr />
              <p className="has-text-right">
                {
                  !this.state.staffArchived ? (
                    <span className="menu-label has-text-danger pointer" onClick={this.getStaffArchived}>Archived Staff</span>
                  ) : (
                    <span className="menu-label has-text-danger pointer" onClick={this.getStaffArchived}>Current Staff</span>
                  )
                }
              </p>
            </div>
          </div>
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content modal-form">
            <div className="modal-container">
              {
                (() => {
                  switch (this.state.action) {
                    case 'add-staff':
                      return <AddStaff toggle={this.toggle} roles={this.props.roles} />;
                    case 'edit-staff':
                      return <EditStaff toggle={this.toggle} roles={this.props.roles} staff={this.state.staff} />;
                    case 'delete-staff':
                      return <DeleteStaff toggle={this.toggle} staff={this.state.staff} />;
                    case 'restore-staff':
                      return <RestoreStaff toggle={this.toggle} staff={this.state.staff} />;
                    default:
                      break;
                  }
                })()
              }
            </div>
          </div>
          <span className="modal-close is-large" onClick={this.toggle}></span>
        </div>
      </div>    
    );
  };
};

const mapStateToProps = state => ({
  staffs: state.shop.staffs,
  staffs_archived: state.shop.staffs_archived,
  editStaffError: state.shop.editStaffError,
  roles: state.shop.roles
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getRoles,
  getStaffs,
  getStaffsArchived
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Staffs);