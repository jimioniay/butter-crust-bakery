const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());

const userRoute = require('./routes/user');
const transferRoute = require('./routes/transfer');

app.use('/api/v1/user', userRoute);
app.use('/api/v1/transfer', transferRoute);

app.get('/api/v1', (req, res) => {
  res.send('Welcome to the ButterCrust Bakery Transfer Api!');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
  });
}

try {
  mongoose.connect(
    process.env.MONGODB_CONNECTION,
    { useNewUrlParser: true },
    (err, db) => {
      err
        ? console.log(`MongoDB error: ${err}`)
        : console.log('Successfully connected to MongoDB.');
    },
  );
} catch (error) {
  console.log(error);
}

const PORT = process.env.PORT || process.env.DEV_SERVER_PORT;
try {
  app.listen(PORT, () => console.log(`Server started on port: ${PORT} !!!`));
} catch (error) {
  console.log('Error on start: ', error);
}
