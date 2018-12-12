// REACT
import React from 'react';

// ==========

class Staff extends React.Component {
  render () {
    const staff = {
      first_name: this.props.staff.first_name,
      last_name: this.props.staff.last_name,
      role: this.props.staff.role_id,
      email: this.props.staff.email,
      photo: this.props.staff.photo
    };
    return (
      <div className="column is-4">
        <div className="card">
          <header className="card-header">
            <figure className="image">
              <img src={staff.photo} alt={`${staff.first_name} ${staff.last_name}`} />
            </figure>
          </header>
          <div className="card-content">
            <ul>
              <li><span className="lnr lnr-user"></span>{staff.first_name} {staff.last_name}</li>
              <li><span className="lnr lnr-star"></span>{staff.role}</li>
              <li><span className="lnr lnr-envelope"></span>{staff.email}</li>
            </ul>
            <div className="buttons">
              <span className="button is-small">Edit</span>
              <span className="button is-small is-danger">Delete</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Staff;