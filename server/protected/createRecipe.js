const router = require("express").Router()
const db = require("../db")
const faker = require("faker")

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

// let title = `${faker.random.words()}`
// let description = faker.lorem.paragraph()
// let directions = faker.lorem.paragraphs()
// let userId = Math.floor(Math.random() * 15)
// let ingredient = faker.random.word()
// let ingredients = [ingredient.repeat(10)]

const formData = {
  title: "Title Three",
  description: `this potato is fucking with me...`,
  ingredients: [
    { portion: 1.5, metric: "tbls", name: "Potato" },
    { portion: 1.5, metric: "tbls", name: "Potato" },
    { portion: 1.5, metric: "tbls", name: "Potato" },
    { portion: 1.5, metric: "tbls", name: "Potato" }
  ],
  directions: `step 1 step 2 step 3`,
  userId: 1
}

router.post("/created-recipes", (request, response, next) => {
  const sql = `
    INSERT INTO recipes (title,description,directions, user_id) VALUES ("${formData.title}","${formData.description}","${formData.directions}",${formData.userId})
  `
  db.query(sql, (error, results, fields) => {
    response.json(results)
  })
  const test = { my: "object" }
  response.json(test)
})

module.exports = router
