const express = require('express');
const router = express.Router();
const { db, Pages, Users } = require('../models/index');
const main = require('../views/main');

router.get('/', async (req, res, next) => {
  try {
    res.send('got GET /user');
  } catch (error) {
    console.log("ERROR ", error);
    next(error);
  }
});

router.post('/', (req, res, next) => {
  try {
    res.send('got post /user')
  } catch (error) {
    console.log("ERROR ", error);
    next(error);
  }
});

router.get('/add', async (req, res, next) => {
  try {
    res.send('got to GET /user/add');
  } catch (error) {
    console.log("ERROR ", error);
    next(error);
  }
});


module.exports = router;
