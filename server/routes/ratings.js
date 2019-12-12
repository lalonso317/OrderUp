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

// router.get("/recipe/:recipeId/rating", (request, response) => {
//   const id = request.params.recipeId
//   Recipe.findById(id)
//     .then(recipe => {
//       recipe.rating = {
//         by_user: request.body.by_user,
//         value: request.body.value
//       }
//     })
//     .catch(errors => ({
//       message: "something went wrong with your request",
//       errors
//     }))

//   response.json({
//     message: "your request went through. Success"
//   })
// })

module.exports = router
