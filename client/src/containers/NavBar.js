import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink
            to="/recommendations"
            exact
          >Recommendations</NavLink>
        </li>
        <li>
          <NavLink
            to="/recommendations/new"
            exact
          >New Recommendation</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
