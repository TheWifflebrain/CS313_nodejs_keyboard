// const { Pool } = require("pg");
// require('dotenv').config();
// const db_url = process.env.DATABASE_URL || process.env.DATABASE_URL1;
// const pool = new Pool({connectionString: db_url});
// require('util');

// function register(accountInfo, callback){
//     var hashpwd = hashPwd(accountInfo.pwd, accountInfo.rptpwd, callback);
//     var sql = "INSERT INTO person (fName, lName, email, username, passwordP) VALUES($1, $2, $3, $4, $5)";
//     var params = [accountInfo.fName, accountInfo.lName, accountInfo.email, accountInfo.username, hashpwd];
    
//     pool.query(sql, params, function(error, db_info) {
//         if(error){
//             console.log("Error in query account model: ")
//             console.log(error);
//             callback(error, null);
//         } 
//         else {
//             var result = {
//                     success:true,
//                     list:db_info.rows
//             }
//             console.log("homepage DB result: "+ JSON.stringify(db_info.rows));
//             callback(null, result);
//         }
//     })
// }

// function hashPwd(pwd, rptpwd, callback) {
//     var bcrypt = require('bcrypt-nodejs');
//     if(pwd === rptpwd) {
//       return bcrypt.hashSync(pwd);
//     } 
//     else {
//       var errorText = {
//         message: "Passwords did not match"
//       };
//       callback(new Error("ERROR: Passwords don't match"), errorText);
//     }
//   }


// module.exports = {
//     register: register,
//     hashPwd: hashPwd
// };
