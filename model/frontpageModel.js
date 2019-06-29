const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL || "postgres://key:9156@localhost:5432/keyboardnodejs";
const pool = new Pool({connectionString: db_url});
require('util');

function getFrontpage(callback){
    var sql = "SELECT keyboard_id, switch, sizeK, typeK, forsale, descriptionK, photo, keyboard_name, username_K FROM keyboard ORDER BY keyboard_id DESC";
    pool.query(sql, function(error, db_results){
        if(error)
        {
            throw error;
        } else {
            var results = {
                    success:true,
                    list:db_results.rows
            };
            callback(null, results);
        }
    });
}