import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SocialLogin from 'react-social-login';

import Button from '../../components/button';

class SocialButton extends Component {
  render() {
    const { children, triggerLogin } = this.props;
    return (
      <Button handleClick={triggerLogin} {...this.props}>
        {children}
      </Button>
    );
  }
}
export default SocialLogin(SocialButton);

SocialLogin.defaultProps = {
  children: <div />,
  triggerLogin: () => {},
};

SocialLogin.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  triggerLogin: PropTypes.func.isRequired,
};
