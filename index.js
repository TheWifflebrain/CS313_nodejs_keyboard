const express = require('express')
const app = express()
const session = require('express-session');
const path = require('path')
const PORT = process.env.PORT || 5000
require('dotenv').config();
const { Pool } = require("pg")
const connectionString = process.env.DATABASE_URL ||  process.env.DATABASE_URL1;
const pool = new Pool({connectionString: connectionString});
const homepageController = require("./controller/homepageController.js");
//const accountController = require("./controller/accountController.js");


app
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.json())
  .use(express.urlencoded({extended: true}))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/homepage', homepageController.getHomepage)
  .get('/getKeyboard', homepageController.getKeyboard)
  .get('/getSwitches', homepageController.getSwitches)
  .get('/getCaps', homepageController.getCaps)
  .post('/addKeyboard', homepageController.addKeyboard)
  .post('/addSwitches', homepageController.addSwitches)
  .post('/addCaps', homepageController.addCaps)
  .post('/removeKeyboard', homepageController.removeKeyboard)
  .post('/removeSwitches', homepageController.removeSwitches)
  .post('/removeCaps', homepageController.removeCaps)
  .post('/editKeyboard', homepageController.editKeyboard)
  .post('/editCaps', homepageController.editCaps)
  .post('/editSwitches', homepageController.editSwitches)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

