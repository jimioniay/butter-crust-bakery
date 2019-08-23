import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = () => (
  <Fragment>
    <nav className="navbar navbar-light">
      <Link to="/" className="navbar-brand">
        <span>
          <img
            src="https://static.wixstatic.com/media/375882_bfa75c6ef5e24ad3a58f4d71e3cb671c~mv2.png/v1/fill/w_142,h_33,al_c,q_80,usm_0.66_1.00_0.01/375882_bfa75c6ef5e24ad3a58f4d71e3cb671c~mv2.webp"
            alt=""
          />
        </span>
      </Link>
    </nav>
  </Fragment>
);

export default Navbar;
