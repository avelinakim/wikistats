const express = require('express');
const morgan = require('morgan');
const main = require('./views/main');
const { db, Pages, Users } = require('./models');
const wikiRoutes = require('./routes/wiki');
const userRoutes = require('./routes/user');



db.authenticate().then(() => {
  console.log('connected to the database');
})

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/wiki', wikiRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.redirect('/wiki');
})

const PORT = 1338;
const init = async () => {
  //use to reset database
  // await Users.sync({ force: true });
  // await Pages.sync({ force: true });
  await Users.sync();
  await Pages.sync();
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
}


init();


