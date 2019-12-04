const mongoose = require("mongoose")

const recipe = new mongoose.Schema({
  name: {
    type: String
  },
  category: {
    type: String
  },
  description: {
    type: String
  },
  ingredients: {
    type: Array
  },
  measurements: {
    type: String
  },
  directions: {
    type: String
  },
  privacy: {
    type: Boolean
  }
})

module.exports = Recipe = mongoose.model("recipe", recipe)
