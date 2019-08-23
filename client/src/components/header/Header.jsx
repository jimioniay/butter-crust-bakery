import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text, classnames = 'header' }) => (
  <p className={`${classnames} mb-4`}>{text}</p>
);
export default Header;

Header.defaultProps = {
  text: '',
  classnames: 'header',
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
  classnames: PropTypes.string,
};
