import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

const Button = ({
  type,
  children,
  text,
  handleClick,
  classnames,
  disabled,
}) => (
  <button
    type={type}
    onClick={handleClick}
    disabled={disabled}
    className={classnames}
  >
    {children || text}
  </button>
);

export default Button;

Button.defaultProps = {
  type: 'button',
  classnames: 'btn btn-outline-secondary btn-lg',
  text: '',
  children: <div />,
  disabled: false,
};

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  classnames: PropTypes.string.isRequired,
  text: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  disabled: PropTypes.bool,
};
