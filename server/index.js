const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const transferRoute = require('./routes/transfer');

app.use('/api/v1/transfer', transferRoute);

app.get('/api/v1', (req, res) => {
  res.send('Welcome to the ButterCrust Bakery Transfer Api!');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.get('*', (req, res) => {
  console.log('We are routing you to the React app');
});

const PORT = process.env.PORT || process.env.DEV_SERVER_PORT;
try {
  app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
} catch (error) {
  console.log('Error on start: ', error);
}
