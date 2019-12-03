const router = require("express").Router()
const db = requrire("../db")

var directions = []

router.post("/directions", (req, res, next) => {
  db.query(sql, (err, results, fields) => {
    if (err) {
      throw new Error()
    } else {
      response.json(results)
    }
  })
})
