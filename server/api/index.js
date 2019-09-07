const axios = require('axios');
require('dotenv/config');

const baseURL = process.env.PAYSTACK_BASE_URL;

module.exports = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
    'Cache-Control': 'no-cache',
  },
});
