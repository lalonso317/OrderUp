const express = require("express")
const mongoose = require("mongoose")
const Recipe = require("./recipe-two")
const router = express.Router()

// Submits a recipe
router.post("/", async (req, res) => {
  const {
    name,
    category,
    description,
    ingredients,
    measurements,
    directions,
    privacy
  } = req.body
  let recipe = {}
  recipe.name = name
  recipe.category = category
  recipe.description = description
  recipe.ingredients = ingredients
  recipe.measurements = measurements
  recipe.directions = directions
  recipe.privacy = privacy

  let recipeModel = new Recipe(recipe)
  await recipeModel.save()
  res.json(recipeModel)
})
// Gets all the recipes
router.get("/", async (req, res) => {
  const recipe = await Recipe.find()
  res.json(recipe)
})
// get a Single recipe
router.get("/:recipeId", async (req, res) => {
  const post = await Recipe.findById(req.params.recipeId)
  res.json(post)
})

module.exports = router
