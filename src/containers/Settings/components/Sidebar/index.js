// REACT
import React from 'react';

// ROUTER
import {NavLink} from 'react-router-dom';

// ==========

class Sidebar extends React.Component {
  render () {
    return (
      <aside className="menu">
        <p className="menu-label">
          Settings
        </p>
        <ul className="menu-list">
          <li><NavLink activeClassName="is-active" exact to="/settings"><span className="lnr lnr-store"></span>Shop</NavLink></li>
          <li><NavLink activeClassName="is-active" to="/settings/staff"><span className="lnr lnr-users2"></span>Staff</NavLink></li>
          <li><NavLink activeClassName="is-active" to="/settings/platforms"><span className="lnr lnr-layers"></span>Platforms</NavLink></li>
        </ul>
      </aside>
    );
  };
};

export default Sidebar;
