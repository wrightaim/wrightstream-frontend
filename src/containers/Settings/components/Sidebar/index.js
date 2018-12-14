// REACT
import React from 'react';

// ROUTER
import {Link} from 'react-router-dom';

// ==========

class Sidebar extends React.Component {
  render () {
    return (
      <aside className="menu">
        <p className="menu-label">
          Settings
        </p>
        <ul className="menu-list">
          <li><Link to="/settings"><span className="lnr lnr-store"></span>Shop</Link></li>
          <li><Link to="/settings/staff"><span className="lnr lnr-users2"></span>Staff</Link></li>
          <li><Link to="/settings/platforms"><span className="lnr lnr-layers"></span>Platforms</Link></li>
        </ul>
      </aside>
    );
  };
};

export default Sidebar;
