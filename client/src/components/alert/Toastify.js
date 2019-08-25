import React, { PureComponent } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Toastify extends PureComponent {
  render() {
    return (
      <div>
        <ToastContainer />
      </div>
    );
  }
}

export default Toastify;
