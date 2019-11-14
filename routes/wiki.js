const express = require('express');
const router = express.Router();
const { db, Pages, Users } = require('../models/index');
const main = require('../views/main');
const { addPage } = require('../views');

function generateSlug(title) {
  // Removes all non-alphanumeric characters from title
  // And make whitespace underscore
  return title.replace(/\s+/g, '_').replace(/\W/g, '');
}

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

router.post('/', async (req, res, next) => {
  try {
    const page = new Pages({
      title: req.body.title,
      content: req.body.content,
      status: req.body.status,
    });


    await page.save();
    res.redirect('/');
    console.log("REQ.BODY ", req.body)
    res.json(req.body);
  } catch (error) {
    console.log("ERROR ", error);
    next(error);
  }
});

router.get('/add', async (req, res, next) => {
  try {
    res.send(addPage());
  } catch (error) {
    console.log("ERROR ", error);
    next(error);
  }
});


module.exports = router;
