import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => (
  <Fragment>
    <nav className="navbar navbar-light navbar-expand-lg justify-content-between">
      <Link to="/" className="navbar-brand">
        <span>
          <img
            src="https://i.ibb.co/BTZ8LNt/2220575.png"
            alt=""
            width="150"
            height="100"
          />
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar1"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbar1">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item mx-4">
            <Link to="/auth/social" className="nav-link">
              Login with Social
            </Link>
          </li>
          <li className="nav-item mx-4">
            <Link to="/auth/signup" className="nav-link">
              Sign Up
            </Link>
          </li>
          <li className="nav-item mx-4">
            <Link to="/auth/signin" className="nav-link">
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </Fragment>
);

export default Navbar;
