import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from '../redux/store';
import IndeterminateProgressBar from '../components/progress-bar/IndeterminateProgressbar';
import Toastify from '../components/alert/Toastify';

import Main from './Main';

const App = () => (
  <Provider store={store}>
    <div className="container-fluid">
      <IndeterminateProgressBar />
      <BrowserRouter>
        <Toastify />
        <Main />
      </BrowserRouter>
    </div>
  </Provider>
);

export default App;
