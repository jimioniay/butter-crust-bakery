import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [banks, setBanks] = useState({
    status: false,
    banks: [],
  });

  useEffect(() => {
    fetchBanks();
  }, []);

  const fetchBanks = async () => {
    try {
      const response = await axios.get('/api/v1/transfer/getBanks');
      setBanks({
        status: response.status,
        bankList: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(banks);
  console.log(axios.baseURL);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
