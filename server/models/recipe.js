const mongoose = require("mongoose")

const recipe = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
    type: Object
  }
})

module.exports = Recipe = mongoose.model("recipe", recipe)

// recipeHeaderInfo, fullRecipe, directions, isChecked, user
