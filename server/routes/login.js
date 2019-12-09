const router = require("express").Router()
const db = require("../db")
const uuid = require("uuid/v4")
const sha512 = require("js-sha512")
const jwt = require("jsonwebtoken")
const config = require("config")
const { check, validationResult } = require("express-validator")

router.post("/Login", (req, res, next) => {
  const username = req.body.username
  let password = req.body.password

  check(username).isAlphanumeric
  const errors = validationResult(req)

  db.query(
    "SELECT salt FROM users WHERE username = ?",
    [username],
    (err, results, fields) => {
      if (results.length > 0) {
        password = sha512(password + results[0].salt)

        const sql = `
            SELECT COUNT(1) as count FROM users WHERE username = ? and password = ?
          `
        db.query(sql, [username, password], (err, results, fields) => {
          if (results[0].count > 0) {
            const token = jwt.sign({ username }, config.get("secret"))
            res.json({
              message: "Authenticated",
              token
            })
          } else {
            res.status(401).json({
              message: "Username or Password are incorrect",
              error: errors
            })
          }
        })
      } else {
        res.status(401).json({
          message: "User does not exsit"
        })
      }
    }
  )
})

module.exports = router
