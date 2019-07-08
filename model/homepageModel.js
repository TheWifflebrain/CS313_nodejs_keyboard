const { Pool } = require("pg");
require('dotenv').config();
const db_url = process.env.DATABASE_URL || process.env.DATABASE_URL1;
const pool = new Pool({connectionString: db_url});
require('util');

function getHomepageDB(callback){
    var sql = "SELECT keyboard_id, switch, size, typeK, descriptionK, photo, keyboardName, usernameK, keyboard_id FROM keyboard ORDER BY keyboard_id DESC"
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
    var sql = "SELECT keyboardName, switch, size, typeK, descriptionK, photo, usernameK, keyboard_id FROM keyboard"
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
    var sql = "SELECT switchName, typeS, travel, actuation, bottomOut, photo, usernameS, switch_id FROM switches ORDER BY switch_id"
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
    var sql = "SELECT capName, material, descriptionC, photo, usernameC, cap_id FROM caps ORDER BY cap_id"
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
/*---------------------------------------------------------------------*/
function addKeyboardDB(keyboard, callback){
    var sql = "INSERT INTO keyboard(keyboardName, switch, size, typeK, descriptionK, photo, usernameK) VALUES($1, $2, $3, $4, $5, $6, $7)";
    var params = [keyboard.keyboardname, keyboard.switch, keyboard.size, keyboard.typek, keyboard.descriptionk, keyboard.photo, "helloWorld1"];
    pool.query(sql, params, function(error, db_results){
        if(error){
            throw error;
        } else {
            var results = {
                success:true,
                list:db_results.rows
            };
            callback(null, results);
        }
    })
}

function addSwitchesDB(switches, callback){
    var sql = "INSERT INTO switches (switchName, typeS, travel, actuation, bottomOut, photo, usernameS) VALUES ($1, $2, $3, $4, $5, $6, $7)";
    var params = [switches.switchname, switches.types, switches.travel, switches.actuation ,switches.bottomout ,switches.photos, 'helloWorld1'];
    pool.query(sql, params, function(err,db_results){
        if(err){
           throw err;
        } else {
            var results = {
                success:true,
               list:db_results.rows
            };
            callback(null, results);
        }
    })
}

function addCapsDB(caps, callback){
    var sql = "INSERT INTO caps (capName, material, descriptionC, photo, usernameC) VALUES ($1, $2, $3, $4, $5)";
    var params = [caps.capname, caps.material, caps.descriptionc, caps.photoc, 'helloWorld1'];
    pool.query(sql, params, function(err,db_results){
        if(err){
            throw err;
        } else {
            var results = {
                success:true,
                list:db_results.rows
            };
            callback(null, results);
        }
    })
}

function removeKeyboardDB(kids, callback){
    var sql = "DELETE FROM keyboard WHERE keyboard_id=$1"
    var params = [kids.kid];
    console.log(kids.kid)
    pool.query(sql, params, function(err,db_results){
        if(err){
            throw err;
        } else {
            var results = {
                success:true,
                list:db_results.rows
            };
            callback(null, results);
        }
    })
}

function removeSwitchesDB(sids, callback){
    var sql = "DELETE FROM switches WHERE switch_id=$1"
    var params = [sids.sid];
    console.log(sids.sid)
    pool.query(sql, params, function(err,db_results){
        if(err){
            throw err;
        } else {
            var results = {
                success:true,
                list:db_results.rows
            };
            callback(null, results);
        }
    })
}

function removeCapsDB(cids, callback){
    var sql = "DELETE FROM caps WHERE cap_id=$1"
    var params = [cids.cid];
    console.log(cids.cid)
    pool.query(sql, params, function(err,db_results){
        if(err){
            throw err;
        } else {
            var results = {
                success:true,
                list:db_results.rows
            };
            callback(null, results);
        }
    })
}



module.exports = {
    getHomepageDB: getHomepageDB,
    getKeyboardDB: getKeyboardDB,
    getSwitchesDB: getSwitchesDB,
    getCapsDB: getCapsDB,
    addKeyboardDB: addKeyboardDB,
    addSwitchesDB: addSwitchesDB,
    addCapsDB: addCapsDB,
    removeKeyboardDB: removeKeyboardDB,
    removeSwitchesDB: removeSwitchesDB,
    removeCapsDB: removeCapsDB
};
