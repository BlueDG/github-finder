import React from 'react';
// impt tab shortcut for proptypes
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Navbar = ({ icon, title }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

// having props by default so you can change them here as you wish
Navbar.defaultProps = {
  title: 'GitHub Finder',
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
