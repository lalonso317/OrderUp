const router = require("express").Router()
const db = require("../db")

router.get("/ingredients-list", (request, response, next) => {
  const sql = `
  SELECT id, name, description, food_group, food_subgroup 
  FROM foods
  ORDER BY food_group;
  `

  db.query(sql, (error, results, fields) => {
    response.json(results)
  })
})

// router.get("/main-food-groups", (request, response, next) => {
//   const sql = `
//   SELECT food_group
//   FROM foods
//   ORDER BY food_group;
//   `

//   db.query(sql, (error, results, fields) => {
//     response.json(results)
//   })
// })

module.exports = router
