// REACT
import React from 'react';

// COMPONENTS
import EditProfile from './components/EditProfile';

// ==========

class Profile extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: false,
      modalClasses: 'modal'
    };
  };

  toggle = () => {
    if (!this.state.modal) {
      this.setState({
        modal: true,
        modalClasses: this.state.modalClasses + ' is-active'
      });
    } else {
      this.setState({
        modal: false,
        modalClasses: 'modal'
      });
    }
  };

  render () {
    const user = {
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      first_initial: this.props.roles.length !== 0 && Object.keys(this.props.user).length !== 0 ? this.props.user.first_name[0] : null,
      last_initial: this.props.roles.length !== 0 && Object.keys(this.props.user).length !== 0 ? this.props.user.last_name[0] : null,
      email: this.props.user.email,
      photo: this.props.user.photo,
      role: this.props.roles.length !== 0 && Object.keys(this.props.user).length !== 0 ? this.props.roles.find(role => role.id === this.props.user.role_id).name : null
    };
    return (
      <div>
        <div className={this.props.modalClasses}>
          <div className="modal-background" onClick={this.props.toggle}></div>
          <div className="modal-content">
            <div className="modal-container">
              <figure className="image staff-profile">
                {
                  user.photo ? (
                    <img src={user.photo} alt={`${user.first_name} ${user.last_name}`} />
                  ) : (
                    <span>{user.first_initial}{user.last_initial}</span>
                  )
                }
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
              <button className="button is-primary is-outlined is-fullwidth" onClick={this.toggle}>Edit Profile</button>
            </div>
          </div>
          <span className="modal-close is-large" onClick={this.props.toggle}></span>
        </div>
        <div className={this.state.modalClasses}>
          <div className="modal-background" onClick={this.toggle}></div>
          <div className="modal-content">
            <div className="modal-container">
              <EditProfile toggle={this.toggle} modal={this.state.modal} staff={this.props.user} />
            </div>
          </div>
          <span className="modal-close is-large" onClick={this.toggle}></span>
        </div>
      </div>
    );
  };
};

export default Profile;