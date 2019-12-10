const express = require("express")
const Recipe = require("../models/recipe")
const router = express.Router()
const faker = require("faker")
const axios = require("axios")
// Submits a recipe

router.post("/api/Recipe", (req, res) => {
  Recipe.create(req.body).then(function(recipe) {
    res.send(recipe)
  })
})
// Gets all the recipes
router.get("/api/Recipe", async (req, res) => {
  const recipe = await Recipe.find()
  res.json(recipe)
  // console.log("all recipes ===========---->>>>", recipe)
})

// gets the uploaded images
router.post("/getImages", (req, res) => {
  const url = req.body.url
  axios.get(url).then(resp => {
    const response = resp.data
    res.json(response)
  })
})

router.get("/recipe/:recipeId", async (request, response) => {
  let recipeId = request.params.recipeId
  const recipe = await Recipe.find({ _id: recipeId })
  response.json(recipe)
})

module.exports = router


