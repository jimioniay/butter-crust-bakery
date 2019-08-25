import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => (
  <Fragment>
    <nav className="navbar navbar-light">
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
      <div className="d-flex justify-content-around">
        <div className="mx-4">
          <Link to="/auth/social">Login with Social</Link>
        </div>
        <div className="mx-4">
          <Link to="/auth/signup">Sign Up</Link>
        </div>
        <div className="mx-4">
          <Link to="/auth/signin">Log In</Link>
        </div>
      </div>
    </nav>
  </Fragment>
);

export default Navbar;
