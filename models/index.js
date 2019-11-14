const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('pages', {
  title: Sequelize.STRING,
  slug: Sequelize.STRING,
  constent: Sequelize.STRING,
  status: Sequelize.ENUM('open', 'closed')
})

const User = db.define('users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true
  }
})

module.exports = { db, Page, User }

