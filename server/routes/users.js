const router = require("express").Router()
const db = require("../db")

// This needed to commented due to the user information was saved on a local database

// These are the backend routes to edit the user profile
// router.post("/edit-profile", (req, res, next) => {
//   const email = req.body.email
//   const firstName = req.body.firstName
//   const lastName = req.body.lastName
//   const tagline = req.body.tagline
//   const about = req.body.about
//   const RecipeImages = req.body.URL
//   const username = req.body.username

//   const sql = `
//         UPDATE Users

//         SET email = ?, firstName = ?, lastName = ?, tagline = ?, about = ?, RecipeImages = ?

//         WHERE username = ?
//     `
//   db.query(
//     sql,
//     [email, firstName, lastName, tagline, about, RecipeImages, username],
//     (err, results, fields) => {
//       if (err) {
//         throw new Error(err)
//       }
//       res.json({
//         message: "Page Updated",
//         results
//       })
//     }
//   )
// })
// router.get("/edit-profile", (req, res, next) => {
//   const sql = `
//   SELECT id, username, email, firstName, lastName, tagline, about, RecipeImages
//   FROM recipeUsers.Users;
//   `
//   db.query(sql, (err, results, fields) => {
//     if (err) {
//       throw new Error(err)
//     }
//     res.json(results)
//   })
// })

// // These are the backend routes to create favorite recipes
// router.post("/add-favorites", (req, res, next) => {
//   const favorite_id = req.body.favor
//   const username = req.body.usernameEA

//   const sql = `
//   INSERT INTO Favorite (favorite_id, username)
//   VALUES (?, ?)
//   `
//   db.query(sql, [favorite_id, username], (err, results, fields) => {
//     if (err) {
//       throw new Error(err, "could not MAKE fav")
//     }
//     res.json(results)
//   })
// })

// router.get("/select-favorites", (req, res, next) => {
//   const sql = `
//   SELECT * From Favorite
//   `
//   db.query(sql, (err, results, fields) => {
//     if (err) {
//       throw new Error(err, "could not GET fav")
//     }
//     res.json(results)
//   })
// })

module.exports = router
