import React, { useState, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import ContactContext from '../../context/contacts/ContactContext';

export const NavBar = props => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { isAuthenticated, user, logout } = authContext;
  const [toggleMenu, setToggleMenu] = useState('');

  const onToggle = e => {
    toggleMenu === '' ? setToggleMenu('is-active') : setToggleMenu('');
  };

  const logoutUser = () => {
    logout();
    contactContext.clearContacts();
  };

  const authLinks = () => (
    <div className="navbar-item">
      <div className="buttons">
        <Link to="/register" className="button is-primary">
          <strong>Sign up</strong>
        </Link>
        <Link to="/login" className="button is-light">
          Login
        </Link>
      </div>
    </div>
  );

  const userLinks = () => (
    <Fragment>
      <div className="navbar-item">
        <span className="subtitle is-6 has-text-white">
          Hello! {user && user.name}
        </span>
      </div>
      <div className="navbar-item">
        <div className="buttons">
          <button
            className="button is-danger has-text-white"
            onClick={logoutUser}
          >
            Logout
          </button>
        </div>
      </div>
    </Fragment>
  );

  return (
    <nav className="navbar is-link">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <i className="fas fa-address-card is-size-1 is-size-2-touch has-rem-margin-right-1" />
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
          {!isAuthenticated ? authLinks() : userLinks()}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
