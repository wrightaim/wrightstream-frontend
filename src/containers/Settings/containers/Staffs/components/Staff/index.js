// REACT
import React from 'react';

// ==========

class Staff extends React.Component {
  getRoleColor = () => {
    switch (this.props.staff.role_id) {
      case 1:
        return 'card role-1';
      case 2:
        return 'card role-2';
      case 3:
        return 'card role-3';
      default:
        return 'card';
    }
  };

  handleStaff = action => {
    this.props.toggle(action, this.props.staff);
  };

  render () {
    const staff = {
      first_name: this.props.staff.first_name,
      last_name: this.props.staff.last_name,
      role: this.props.roles.find(role => role.id === this.props.staff.role_id).name,
      email: this.props.staff.email,
      photo: this.props.staff.photo,
      archived: this.props.staff.archived
    };
    return (
      <div className="column is-4">
        <div className={this.getRoleColor()}>
          <header className="card-header">
            <figure className="image staff-profile">
              {
                staff.photo ? (
                  <img src={staff.photo} alt={`${staff.first_name} ${staff.last_name}`} />
                ) : (
                  <span>{staff.first_name[0]}{staff.last_name[0]}</span>
                )
              }
            </figure>
          </header>
          <div className="card-content">
            <div className="has-text-centered">
              <p className="title is-5 is-marginless">{staff.first_name} {staff.last_name}</p>
              <p className="subtitle is-7">{staff.role}</p>
            </div>      
            <div className="buttons-small">
              {
                !staff.archived ? (
                  <div>
                    <span className="button is-small" onClick={() => this.handleStaff('edit-staff')}>Edit</span>
                    <span className="button is-small is-danger" onClick={() => this.handleStaff('delete-staff')}>Delete</span>
                  </div>                 
                ) : (
                    <span className="button is-small is-success" onClick={() => this.handleStaff('restore-staff')}>Restore</span>                   
                )
              }            
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Staff;