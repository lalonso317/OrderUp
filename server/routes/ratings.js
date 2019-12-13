const router = require("express").Router()
const Recipe = require("../models/recipe")

router.post("/recipe/:recipeId", (request, response) => {
  const id = request.params.recipeId
  Recipe.findById(id)
    .then(recipe => {
      recipe.rating = [
        ...recipe.rating,
        {
          by_user: request.body.by_user,
          value: request.body.value
        }
      ]
      recipe.save()
    })
    .catch(errors => ({
      message: "something went wrong with your request",
      errors
    }))

  response.json({
    message: "your request went through. Success"
  })
})

router.delete("/recipe/:recipeId", (request, response) => {
  const id = request.params.recipeId
  Recipe.findByIdAndDelete(id).then(
    response.json({
      message: "worked"
    })
  )
  response.json({
    message: "worked"
  })
})

module.exports = router
