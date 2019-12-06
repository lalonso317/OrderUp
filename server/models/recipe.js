const mongoose = require("mongoose")

const recipe = new mongoose.Schema({
  recipeHeaderInfo: {
    category: String,
    name: String,
    description: String
  },
  fullRecipe: {
    ingredients: []
  },
  directions: [{ step: String }],
  isChecked: {
    type: Boolean
  },
  user: {
    type: Array
  },
  RecipeImages: [
    { url: String }
  ]
})

module.exports = Recipe = mongoose.model("recipe", recipe)

// recipeHeaderInfo, fullRecipe, directions, isChecked, user
