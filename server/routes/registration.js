const router = require("express").Router()
const db = require("../db")
const uuid = require("uuid/v4")
const sha512 = require("js-sha512")
const jwt = require("jsonwebtoken")
const config = require("config")

router.post("/Register", (req, res, next) => {
  const salt = uuid()
  const username = req.body.username
  const email = req.body.email
  const password = sha512(req.body.password + salt)

  const sql =
    "INSERT INTO Users (username, email, password, salt) VALUES (?, ?, ?, ?)"

  db.query(sql, [username, email, password, salt], (err, results, fields) => {
    if (err) {
      throw new Error(err)
    }
    res.json({
      message: "User created",
      results
    })
  })
})

router.get("/Register", (req, res, next) => {
  const sql = "SELECT id, username, email from recipeUsers.Users"

  db.query(sql, (err, results, fields) => {
    if (err) {
      throw new Error(err)
    }
    res.json({
      message: "Lists of All Users",
      results
    })
  })
})

module.exports = router
