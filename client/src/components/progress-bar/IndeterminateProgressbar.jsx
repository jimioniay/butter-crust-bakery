import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './progress-bar.scss';

const IndeterminateProgressBar = ({ spinner }) => {
  if (spinner) {
    return (
      <div className="progress">
        <div className="indeterminate" />
      </div>
    );
  }
  return null;
};

const mapStateToProps = ({ postTransferClientReducer: { spinner } }) => ({
  spinner,
});

export default connect(
  mapStateToProps,
  {},
)(IndeterminateProgressBar);

IndeterminateProgressBar.defaultProps = {
  load: false,
};

IndeterminateProgressBar.propTypes = {
  load: PropTypes.bool,
};
