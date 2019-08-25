import React from 'react';

import PropTypes from 'prop-types';
import Cancel from '../icons/Cancel';

const DismissModal = ({ classnames }) => (
  <div data-dismiss="modal" className={`dismiss-modal ${classnames}`}>
    <Cancel />
  </div>
);

export default DismissModal;

DismissModal.defaultProps = {
  classnames: '',
};

DismissModal.propTypes = {
  classnames: PropTypes.string,
};
