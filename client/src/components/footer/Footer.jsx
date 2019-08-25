import React, { Fragment } from 'react';

const Footer = () => (
  <Fragment>
    <div id="footer" className="row padding text-center">
      <div className="col-sm-12 col-md-6 col-lg-4 padding line-height">
        <h3 className="mb-4">ABOUT US</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo suscipit
          a odio praesentium doloribus dignissimos consequatur quod, consectetur
          veritatis nemo.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
          magnam.&nbsp;
        </p>
        <p>Copright2018</p>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4 padding line-height">
        <h3 className="mb-4">NEWSLETTER</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          ipsam?
        </p>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="helpId"
            placeholder="Enter Email Address"
          />
        </div>
        <div>
          <button className="btn btn-outline bg-white text-dark ml-0 diplay-4">
            GO
          </button>
        </div>
      </div>
      <div className="col-sm-12 col-lg-4 padding line-height">
        <h3 className="mb-4">FOLLOW US</h3>
        <p>Meet us on all social media networks. We are waiting...</p>
        <div className="d-flex justify-content-around">
          <a href="http://linkedIn.com/aribisalaayodeji">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="http://twitter.com/aribisalaayodeji">
            <i className="fab fa-twitter-square" />
          </a>
          <a href="http://facebook.com/aribisalaayodeji">
            <i className="fab fa-facebook-square" />
          </a>
          <a href="http://gmail.com/aribisalaayodeji">
            <i className="fas fa-envelope-square" />
          </a>
          <a href="http://instagram.com/aribisalaayodeji">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  </Fragment>
);
export default Footer;
