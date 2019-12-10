const router = require("express").Router()
const db = require("../db")
const uuid = require("uuid/v4")
const sha512 = require("js-sha512")
const jwt = require("jsonwebtoken")
const config = require("config")

router.post("/edit-profile", (req, res, next) => {
  const email = req.body.email
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const tagline = req.body.tagline
  const about = req.body.about
  const RecipeImages = req.body.URL
  const username = req.body.username

  console.log(req.body)
  const sql = `
        UPDATE Users

        SET email = ?, firstName = ?, lastName = ?, tagline = ?, about = ?, RecipeImages = ?

        WHERE username = ?
    `
  db.query(
    sql,
    [email, firstName, lastName, tagline, about, RecipeImages, username],
    (err, results, fields) => {
      if (err) {
        throw new Error(err)
      }
      console.log(results)
      res.json({
        message: "Page Updated",
        results
      })
    }
  )
})
router.get("/edit-profile", (req, res, next) => {
  const sql = `
  SELECT id, username, email, firstName, lastName, tagline, about, RecipeImages
FROM recipeUsers.Users;
  `
  db.query(sql, (err, results, fields) => {
    if (err) {
      throw new Error(err)
    }
    res.json(results)
  })
})
module.exports = router
