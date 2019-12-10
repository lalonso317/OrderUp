const router = require("express").Router()
const db = require("../db")
const uuid = require("uuid/v4")
const sha512 = require("js-sha512")
const jwt = require("jsonwebtoken")
const config = require("config")

router.post("/edit-profile", (req, res, next) => {
  const username = req.body.username
  const email = req.body.email
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const tagline = req.body.tagline
  const about = req.body.about

  console.log(req.body)
  const sql = `
        UPDATE Users
        SET username = ?, email = ?, firstName = ?, lastName = ?, tagline = ?, about = ?
        WHERE username = ?
    `
  db.query(
    sql,
    [username, email, firstName, lastName, tagline, about, username],
    (err, results, fields) => {
      if (err) {
        throw new Error(err)
      }
      res.json({
        message: "Page Updated",
        results
      })
    }
  )
})

module.exports = router
