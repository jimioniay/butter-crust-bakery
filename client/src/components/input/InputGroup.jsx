import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import './input.css';

const InputGroup = ({
  label,
  type,
  handleChange,
  id = shortid.generate(),
  disabled,
  value,
  maxLength,
  amount,
  handleBlur,
  name,
}) => (
  <div className="input-group mb-3">
    <div className="input-group-prepend">
      <span className="input-group-text" id={id}>
        {label}
      </span>
    </div>
    <input
      name={name}
      type={type}
      className="form-control"
      aria-label="Sizing example input"
      aria-describedby={id}
      onChange={handleChange}
      disabled={disabled}
      value={value}
    />
  </div>
);

export default InputGroup;

InputGroup.defaultProps = {
  name: '',
  label: '',
  type: 'text',
  handleChange: () => {},
  id: '',
  disabled: false,
  value: '',
  maxLength: '',
  children: <div />,
  handleBlur: () => {},
};

InputGroup.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  maxLength: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  handleBlur: PropTypes.func,
};
