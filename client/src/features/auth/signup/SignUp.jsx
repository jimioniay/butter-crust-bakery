import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';

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
    postSignUp(data);
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
