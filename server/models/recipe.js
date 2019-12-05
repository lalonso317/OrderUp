const mongoose = require("mongoose")

const recipe = new mongoose.Schema({
  recipeHeaderInfo: {
    type: Array
  },
  fullRecipe: {
    type: Object
  },
  directions: {
    type: Array
  },
  isChecked: {
    type: Boolean
  },
  user: {
    type: Array
  }
})

module.exports = Recipe = mongoose.model("recipe", recipe)

// recipeHeaderInfo, fullRecipe, directions, isChecked, user
