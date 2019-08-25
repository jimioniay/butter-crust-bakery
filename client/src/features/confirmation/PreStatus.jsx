import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const PreStatus = ({ status, message }) => (
  <Fragment>
    <div className="confirm-response">
      <div className="confirm-response-content">
        <p className={status ? 'text-success muted' : 'text-danger muted'}>
          {message}
        </p>
      </div>
    </div>
  </Fragment>
);

export default PreStatus;

PreStatus.defaultProps = {
  status: false,
  message: '',
};

PreStatus.propTypes = {
  status: PropTypes.bool,
  message: PropTypes.string,
};
