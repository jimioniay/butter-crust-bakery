import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './notavailable.scss';

const NotAvailable = () => (
  <div className="custom-warning-error-bgColor">
    <div className="custom-warning-header">
      <Link to="/">
        <img
          src="https://i.ibb.co/BTZ8LNt/2220575.png"
          alt=""
          width="150"
          height="100"
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
