const express = require('express');
const router = express.Router();
const draws = require('../source/draws')

router.get('/', (request, response) => {
  response.json(draws);
});

module.exports = router;