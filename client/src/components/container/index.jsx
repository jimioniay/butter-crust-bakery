import React from 'react';
import PropTypes from 'prop-types';

import './container.css';

const Index = ({ children }) => (
  <div className="container-fluid rounded container-border m-1">{children}</div>
);

export default Index;

Index.defaultProps = {
  children: '<div />',
};

Index.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
