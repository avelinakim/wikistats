const express = require('express');
const router = express.Router();
const { db, Pages, Users } = require('../models/index');
const main = require('../views/main');

router.get('/', async (req, res, next) => {
  try {
    const pagesData = await Pages.findAll();
    //console.log(pagesData);
    res.send(main(pagesData));
  } catch (error) {
    console.log("ERROR ", error);
    next(error);
  }
});

router.post('/', (req, res, next) => {
  try {
    res.send('got post /wiki')
  } catch (error) {
    console.log("ERROR ", error);
    next(error);
  }
});

router.get('/add', async (req, res, next) => {
  try {
    res.send('got to GET /wiki/add');
  } catch (error) {
    console.log("ERROR ", error);
    next(error);
  }
});


module.exports = router;
