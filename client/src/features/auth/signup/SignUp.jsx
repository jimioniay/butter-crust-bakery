import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import postSignUp from '../../../redux/actionCreators/postSignUp';
import InputGroup from '../../../components/input/InputGroup';
import Header from '../../../components/header';
import SignUpDOM from './SignUpDOM.json';

const SignUp = ({ push, postSignUp, signUpStatus }) => {
  useEffect(() => {
    if (signUpStatus) {
      push('/auth/signin');
    }
  }, [signUpStatus]);
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (
      data.name.length > 0 &&
      data.email.length > 0 &&
      data.password.length > 0 &&
      data.confirmPassword.length > 0
    ) {
      if (data.password === data.confirmPassword) {
        postSignUp(data);
      } else {
        toast.warn('Password and password confirmation do not match');
      }
    } else {
      toast.warn('Please supply all fields');
    }
  };
  const displayForm = SignUpDOM.map(item => (
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
        <Header text="Sign Up" classnames="small-header" />
        <form>
          {displayForm}
          <button
            className="btn btn-outline-secondary btn-lg"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
      </Fragment>
    </div>
  );
};

const mapStateToProps = ({ postSignUpReducer: { status: signUpStatus } }) => ({
  signUpStatus,
});

export default connect(
  mapStateToProps,
  { postSignUp },
)(SignUp);
