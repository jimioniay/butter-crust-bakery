import React from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './progress-bar.scss';

const IndeterminateProgressBar = ({ status }) => {
  if (typeof status === 'object' ? status.status : status) {
    return (
      <div className="progress">
        <div className="indeterminate" />
      </div>
    );
  }
  return null;
};

const mapStateToProps = ({
  postTransferClientReducer: { spinner },
  loadingReducer: { load },
}) => ({
  status: spinner || load,
});

export default connect(
  mapStateToProps,
  {},
)(IndeterminateProgressBar);

IndeterminateProgressBar.defaultProps = {
  status: false,
};

IndeterminateProgressBar.propTypes = {
  status: PropTypes.bool,
};
