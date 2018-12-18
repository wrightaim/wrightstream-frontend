// REACT
import React from 'react';

// ROUTER
import {Link, NavLink, withRouter} from 'react-router-dom';

// REDUX
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getUser, logout} from '../../state/actions/auth';

// ==========

class Header extends React.Component {
  componentDidMount () {
    this.props.getUser();
  };

  render () {
    const user = {
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      photo: this.props.user.photo,
      role_id: this.props.user.role_id
    };
    return (
      <nav className="navbar is-fixed-top">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img src="../assets/wrightstream-logo-horizontal.svg" alt="WrightStream" />
          </Link>
          <span role="button" className="navbar-burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        <div className="navbar-menu" id="navMenu">
          {
            this.props.authorized ? (
              <div className="navbar-end">
                <div className="navbar-main">
                  <NavLink className="navbar-item" activeClassName="is-active" to="/products">Products</NavLink>
                  <NavLink className="navbar-item" activeClassName="is-active" to="/inventory">Inventory</NavLink>
                  <NavLink className="navbar-item" activeClassName="is-active" to="/workstream">WorkStream</NavLink>
                  <NavLink className="navbar-item" activeClassName="is-active" to="/mystream">MyStream</NavLink>
                  {user.role_id <= 2 ? <NavLink className="navbar-item" activeClassName="is-active" to="/admin">Admin</NavLink> : null}
                </div>
                <div className="navbar-item has-dropdown is-hoverable">
                  <span className="navbar-link is-hidden-touch">
                    <figure className="image profile">
                      {
                        user.photo ? (
                          <img src={user.photo} alt={`${user.first_name} ${user.last_name}`} />
                        ) : (
                          <span>{user.first_name[0]}{user.last_name[0]}</span>
                        )
                      }
                    </figure>                  
                    <span>{user.first_name}</span>
                  </span>
                  <div className="navbar-dropdown is-right">
                    <span className="navbar-item pointer" onClick={this.props.toggle}>Profile</span>
                    {user.role_id === 1 ? <Link className="navbar-item" to="/settings">Settings</Link> : null}
                    <Link className="navbar-item" to="/help">Help</Link>
                    <hr className="navbar-divider" />
                    <Link className="navbar-item is-active" to="/" onClick={this.props.logout}>Log Out</Link>
                  </div>
                </div>
              </div>
            ) : (
              <div className="navbar-end">
                <div className="navbar-main">
                  <Link className="navbar-item" to="/login">Log In</Link>
                  <Link className="navbar-item" to="/signup">Sign Up</Link>
                </div>
              </div>
            )
          }
        </div>
      </nav>
    );
  };
};

const mapStateToProps = state => ({
  user: state.auth.user,
  authorized: state.auth.authorized
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getUser,
  logout
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));