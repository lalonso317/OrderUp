const mongoose = require("mongoose")

const recipe = new mongoose.Schema({
  recipeName: Array
})

module.exports = Recipe = mongoose.model("recipe", recipe)
