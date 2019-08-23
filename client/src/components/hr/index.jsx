import React from 'react';
import PropTypes from 'prop-types';

import './hr.css';

const Index = ({ classnames }) => <hr className={`${classnames}`} />;

export default Index;

Index.defaultProps = {
  classnames: '',
};

Index.propTypes = {
  classnames: PropTypes.string,
};
