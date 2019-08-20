const express = require('express');
const axios = require('../api');
const router = express.Router();

router.get('/getBanks', async (req, res) => {
  try {
    const response = await axios({
      method: 'GET',
      url: '/bank',
    });
    res.json(response.data);
  } catch (error) {
    res.json(error.response.data);
  }
  //req.query.user
});

module.exports = router;
