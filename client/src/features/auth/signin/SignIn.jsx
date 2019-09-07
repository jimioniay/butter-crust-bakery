import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

import InputGroup from '../../../components/input/InputGroup';
import Header from '../../../components/header';
import SignInDOM from './SignInDOM.json';
import postSignIn from '../../../redux/actionCreators/postSignIn';
import AuthService from '../../../redux/util/authServices';
import setAuthorizationHeader from '../../../api/setAuthorizationHeader';

const SignIn = ({ push, postSignIn, signInStatus, token }) => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  useEffect(() => {
    if (signInStatus) {
      AuthService.saveToken(token);
      setAuthorizationHeader(token);
      push('/transfer');
    }
  }, [signInStatus]);
  const handleChange = e => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    postSignIn(data);
  };
  const displayForm = SignInDOM.map(item => (
    <Fragment key={item.name}>
      <InputGroup
        name={item.name}
        type={item.type}
        label={item.label}
        handleChange={handleChange}
        value={data[item.name]}
      />
    </Fragment>
  ));
  return (
    <div>
      <Fragment>
        <Header text="Login" classnames="small-header" />
        <form>
          {displayForm}
          <button
            className="btn btn-outline-secondary btn-lg"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
      </Fragment>
    </div>
  );
};

const mapStateToProps = ({
  postSignInReducer: { status: signInStatus, token },
}) => ({
  signInStatus,
  token,
});

export default connect(
  mapStateToProps,
  { postSignIn },
)(SignIn);
