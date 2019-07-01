const { Pool } = require("pg");
require('dotenv').config();
const db_url = process.env.DATABASE_URL || process.env.DATABASE_URL1;
const pool = new Pool({connectionString: db_url});
require('util');

function getHomepageDB(callback){
    var sql = "SELECT keyboard_id, switch, size, typeK, descriptionK, photo, keyboardName, usernameK FROM keyboard ORDER BY keyboard_id DESC"
    pool.query(sql, function(error, db_info){
        if(error){
            console.log("Error in query homepage: ")
			console.log(error);
			callback(error, null);
        } 
        else {
            var result = {
                    success:true,
                    list:db_info.rows
            }
            console.log("homepage DB result: "+ JSON.stringify(db_info.rows))
            callback(null, result);
        }
    })
}

function getKeyboardDB(callback){
    var sql = "SELECT keyboardName, switch, size, typeK, descriptionK, photo, usernameK FROM keyboard"
    pool.query(sql, function(error, db_info){
        if(error){
            console.log("Error in query keyboard: ")
			console.log(error);
			callback(error, null);
        } 
        else {
            var result = {
                    success:true,
                    list:db_info.rows
            }
            console.log("keyboard DB result: "+ JSON.stringify(db_info.rows))
            callback(null, result);
        }
    })
}

function getSwitchesDB(callback){
    var sql = "SELECT switchName, typeS, travel, actuation, bottomOut, photo, usernameS FROM switches ORDER BY switch_id"
    pool.query(sql, function(error, db_info){
        if(error){
            console.log("Error in query switches: ")
			console.log(error);
			callback(error, null);
        } 
        else {
            var result = {
                    success:true,
                    list:db_info.rows
            }
            console.log("switches DB result: "+ JSON.stringify(db_info.rows))
            callback(null, result);
        }
    })
}

function getCapsDB(callback){
    var sql = "SELECT capName, material, descriptionC, photo, usernameC FROM caps ORDER BY cap_id"
    pool.query(sql, function(error, db_info){
        if(error){
            console.log("Error in query caps: ")
			console.log(error);
			callback(error, null);
        } 
        else {
            var result = {
                    success:true,
                    list:db_info.rows
            }
            console.log("caps DB result: "+ JSON.stringify(db_info.rows))
            callback(null, result);
        }
    })
}

module.exports = {
    getHomepageDB: getHomepageDB,
    getKeyboardDB: getKeyboardDB,
    getSwitchesDB: getSwitchesDB,
    getCapsDB: getCapsDB
};
