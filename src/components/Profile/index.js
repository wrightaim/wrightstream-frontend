// REACT
import React from 'react';

// ==========

class Profile extends React.Component {
  render () {
    const user = {
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      email: this.props.user.email,
      photo: this.props.user.photo,
      role: this.props.roles.length !== 0 && Object.keys(this.props.user).length !== 0 ? this.props.roles.find(role => role.id === this.props.user.role_id).name : null
    };
    return (
      <div className={this.props.modalClasses}>
        <div className="modal-background" onClick={this.props.toggle}></div>
        <div className="modal-content">
          <div className="modal-container">
            <figure className="image staff-profile">
              <img src={user.photo} alt={`${user.first_name} ${user.last_name}`} />
            </figure>
            <aside className="menu">
              <div className="has-text-centered">
                <h1 className="title is-4">{user.first_name} {user.last_name}</h1>
                <p className="subtitle menu-label">{user.role}</p>
              </div>            
              <hr />
              <ul className="menu-list">
                <li><i className="fa fas fa-user"></i>{user.first_name} {user.last_name}</li>
                <li><i className="fa fas fa-envelope"></i>{user.email}</li>
              </ul>
            </aside>
            <hr />
            <button className="button is-primary is-outlined is-fullwidth">Edit Profile</button>
          </div>
        </div>
        <span className="modal-close is-large" onClick={this.props.toggle}></span>
      </div>
    );
  };
};

export default Profile;