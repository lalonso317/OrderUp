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

  username: {
    type: String
  },
  RecipeImages: [{ url: String }],
  recId: {
    type: String,
    default: null
  },
  comments: [{ avatar: String, author: String, text: String, meta: Date }],
  rating: [
    {
      by_user: String,
      value: Number
    }
  ]
})
// { avatar: String, author: String, text: String, meta: Date }
module.exports = Recipe = mongoose.model("recipe", recipe)

// recipeHeaderInfo, fullRecipe, directions, isChecked, user
