const express = require('express');
const morgan = require('morgan');
const main = require('./views/main');
const { db, Pages, Users } = require('./models');

db.authenticate().then(() => {
  console.log('connected to the database');
})

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(main());
})

const PORT = 1338;
const init = async () => {
  await Users.sync();
  await Pages.sync();
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}


init();


