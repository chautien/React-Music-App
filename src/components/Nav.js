import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ libraryActive, setLibraryActive }) => {
  return (
    <nav className="nav">
      <h6 className="nav-logo">Music Wave</h6>
      <button
        onClick={() => setLibraryActive(!libraryActive)}
        className="nav-btn"
      >
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
