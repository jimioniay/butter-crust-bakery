import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './notavailable.scss';

const NotAvailable = () => (
  <div className="custom-warning-error-bgColor">
    <div className="custom-warning-header">
      <Link to="/">
        <img
          src="https://static.wixstatic.com/media/375882_bfa75c6ef5e24ad3a58f4d71e3cb671c~mv2.png/v1/fill/w_142,h_33,al_c,q_80,usm_0.66_1.00_0.01/375882_bfa75c6ef5e24ad3a58f4d71e3cb671c~mv2.webp"
          width="100"
          height="50"
          alt=""
        />
      </Link>
    </div>
    <h2 className="custom-warning-text">404</h2>
    <div className="custom-warning-heading">
      <span>Oops. {"There's"} nothing here.</span>
    </div>
    <div className="custom-warning-body">
      <span>
        This page no longer exists or the link may be broken. But {"don't"}{' '}
        worry, you can always return from whence you came.
      </span>
    </div>
  </div>
);

export default NotAvailable;

NotAvailable.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
