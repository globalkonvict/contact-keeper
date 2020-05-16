import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState('');

  const onToggle = e => {
    toggleMenu === '' ? setToggleMenu('is-active') : setToggleMenu('');
  };
  return (
      <nav className="navbar is-link">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <i class="fas fa-address-card is-size-1 is-size-2-touch mx1" />
              <span className="is-size-4">ContactKeeper</span>
            </Link>
            <span className="navbar-burger" onClick={onToggle}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>
          </div>
          <div
            className={`has-background-link navbar-end navbar-menu ${toggleMenu}`}
          >
            <div className="navbar-item">
              <Link to="/" className="has-text-white">
                Home
              </Link>
            </div>
            <div className="navbar-item">
              <Link to="/about" className="has-text-white">
                About
              </Link>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <span className="button is-primary">
                  <strong>Sign up</strong>
                </span>
                <span className="button is-light">Log in</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
  );
};

export default NavBar;
