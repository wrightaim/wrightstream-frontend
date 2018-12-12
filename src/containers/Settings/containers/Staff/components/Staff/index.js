// REACT
import React from 'react';

// ==========

class Staff extends React.Component {
  render () {
    return (
      <div className="column is-4">
        <div className="card">
          <header className="card-header">
            <figure className="image">
              <img src={this.props.staff.photo} alt={`${this.props.staff.first_name} ${this.props.staff.last_name}`} />
            </figure>
          </header>
          <div className="card-content">
            <ul>
              <li><span className="lnr lnr-user"></span>{this.props.staff.first_name} {this.props.staff.last_name}</li>
              <li><span className="lnr lnr-star"></span>{this.props.staff.role_id}</li>
              <li><span className="lnr lnr-envelope"></span>{this.props.staff.email}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  };
};

export default Staff;