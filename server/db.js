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
