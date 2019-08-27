import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import NavBar from '../../components/navbar';
import Container from '../../components/container';
import Footer from '../../components/footer';

const BaseUI = ({ children }) => (
  <div className="container-fluid p-0">
    <NavBar />
    <div className="row">
      <div className="col-12 col-md-6 base-img" />
      <div className="col-12 col-md-6">
        <Container>{children}</Container>
      </div>
    </div>
    <Footer />
  </div>
);

export default BaseUI;

BaseUI.defaultProps = {
  children: <div />,
};

BaseUI.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
