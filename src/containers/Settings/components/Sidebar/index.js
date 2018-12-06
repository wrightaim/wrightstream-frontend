// REACT
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom'

// ==========

class Sidebar extends React.Component {
  render () {
    return (
      <aside className="menu">
        <p className="menu-label">
          Settings
        </p>
        <ul className="menu-list">
          <li><Link to="/products">Shop</Link></li>
          <li><Link to="/products/items">Staff</Link></li>
          <li><Link to="/products/bundles">Platforms</Link></li>
        </ul>
      </aside>
    );
  };
};

export default Sidebar;
