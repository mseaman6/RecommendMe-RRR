import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink
            to="/"
            exact
          >Home</NavLink>
        </li>
        <li>
          <NavLink
            to="/recommendations"
            exact
          >Recommendations</NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            exact
          >Categories</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
