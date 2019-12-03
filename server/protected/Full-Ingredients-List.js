const router = require("express").Router()
const db = require("../db")

// accesing database and creating a route called ingredients-list which will store all of our ingredients

router.get("/ingredients-list", (request, response, next) => {
  // only grabbing the fields needed rather then using * and grabbing unnecessary fields.
  const sql = `
  SELECT id, name, description, food_group, food_subgroup 
  FROM foods
  ORDER BY food_group;
  `

  db.query(sql, (error, results, fields) => {
    response.json(results)
  })
})

module.exports = router
