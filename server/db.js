const mysql = require("mysql")

// set up mysql pool. Main database is called recipes.

const pool = mysql.createPool({
  connectionLimit: 10,
  user: "root",
  password: "",
  database: "recipeUsers",
  host: "localhost"
})

module.exports = pool

// this commented out part is for connecting to a remote mysql database. still needs work

// const mysql = require("mysql")

// // set up mysql pool. Main database is called recipes.

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   user: "KdamlJF0Tb",
//   password: "wGAsrl6Jap",
//   database: "KdamlJF0Tb",
//   host: "remotemysql.com",
//   port: 3306
// })
// //wGAsrl6Jap
// exports.getConnection = function(callback) {
//   pool.getConnection(function(err, conn) {
//     if (err) {
//       return callback(err)
//     }
//     callback(err, conn)
//   })
// }
// module.exports = pool
