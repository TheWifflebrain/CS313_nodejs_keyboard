const express = require('express')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 5000
const { Pool } = require("pg")
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({connectionString: connectionString});
const frontpageController = require("./controller/frontpageController.js");


app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/getBoard', getBoard)
  .get('/getFrontPage', getFrontPage)
  .get('/frontpage', frontpageController.getFrontpage)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function getFrontPage(req, res){
  res.render('pages/frontpage');
}

function getBoard(req, res){
    const id = req.query.id

    getBoardFromDB(id, function(error, result){
      if (error || result == null) {
        res.status(500).json({success: false, data: error});
      } 
      else {
        console.log("Back from db with results", result);
        res.status(200).json(result)
      }
    });
}

function getBoardFromDB(id, callback){
  console.log("id: " + id);
  var sql = "SELECT * FROM keyboard WHERE keyboard_id = $1::int"
  var params = [id];
  pool.query(sql, params, function(err, result){
    if(err){
      console.log("Error in query: ")
			console.log(err);
			callback(err, null);
    }
    console.log("foun DB result: "+ JSON.stringify(result.rows))
    var result = {
      success: true,
      list:result.rows
    }
    callback(null, result);
  })
}