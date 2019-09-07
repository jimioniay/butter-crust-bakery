import React from 'react';
import PropTypes from 'prop-types';

import './input.scss';

// Note: add random strings for autocomplete;autocomplete="dontauthocomplete"

const InputField = ({
  type,
  name,
  classnames,
  placeholderText,
  handleChange,
  handleFocus,
  inputRef,
  accept,
  autoComplete,
  checked,
  value,
  required,
}) => {
  const props = value !== undefined ? { value } : {};
  return (
    <input
      type={type}
      name={name}
      ref={inputRef}
      accept={accept}
      className={`${classnames}`}
      placeholder={placeholderText}
      onChange={handleChange}
      onFocus={handleFocus}
      {...props}
      autoComplete={autoComplete}
      checked={checked}
      required={required}
    />
  );
};
export default InputField;

InputField.defaultProps = {
  type: 'text',
  classnames: 'default-input mb-4',
  placeholderText: '',
  handleFocus: () => {},
  defaultValue: '',
  inputRef: () => {},
  accept: '',
  autoComplete: 'off',
  checked: false,
  value: undefined,
  required: false,
};

InputField.propTypes = {
  autoComplete: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  classnames: PropTypes.string,
  defaultValue: PropTypes.string,
  placeholderText: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  handleFocus: PropTypes.func.isRequired,
  accept: PropTypes.string,
  checked: PropTypes.bool,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  required: PropTypes.bool,
};
