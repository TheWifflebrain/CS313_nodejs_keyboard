const { Pool } = require("pg");
require('dotenv').config();
const db_url = process.env.DATABASE_URL || process.env.DATABASE_URL1;
const pool = new Pool({connectionString: db_url});
require('util');

function getHomepageDB(callback){
    var sql = "SELECT keyboard_id, switch, size, typeK, descriptionK, photo, keyboardName, usernameK FROM keyboard ORDER BY keyboard_id DESC"
    pool.query(sql, function(error, result){
        if(error)
        {
            console.log("Error in query: ")
			console.log(error);
			callback(error, null);
        } 
        else 
        {
            console.log("found DB result: "+ JSON.stringify(result.rows))
            var result = {
                    success:true,
                    list:result.rows
            }
            callback(null, result);
        }
    })
}

module.exports = {
    getHomepageDB: getHomepageDB
};
