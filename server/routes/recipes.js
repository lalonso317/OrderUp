const express = require("express")
const Recipe = require("../models/recipe")
const router = express.Router()
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
})

router.post("/api/update-recipe", (req, res) => {
  Recipe.findById(req.body.recId)
    .then(recipe => {
      recipe.recipeHeaderInfo.category = req.body.recipeHeaderInfo.category
      recipe.recipeHeaderInfo.name = req.body.recipeHeaderInfo.name
      recipe.recipeHeaderInfo.description =
        req.body.recipeHeaderInfo.description
      recipe.fullRecipe.ingredients = req.body.fullRecipe.ingredients
      recipe.directions = req.body.directions
      recipe.isChecked = req.body.isChecked
      recipe.username = req.body.username
      recipe.RecipeImages = req.body.RecipeImages
      recipe.save()
      // .catch(err => res.status(400).json("error: " + err))
    })
    .then(resp => {
      console.log("updated")
    })
    .catch(err => {
      console.log(err)
    })
  res.json({
    message: "butthole"
  })
})

// adds comments to the recipe objects

router.post("/api/addedComment", (req, res) => {
  Recipe.findById(req.body.id)
    .then(recipe => {
      recipe.recipeHeaderInfo.category = recipe.recipeHeaderInfo.category
      recipe.recipeHeaderInfo.name = recipe.recipeHeaderInfo.name
      recipe.recipeHeaderInfo.description = recipe.recipeHeaderInfo.description
      recipe.fullRecipe.ingredients = recipe.fullRecipe.ingredients
      recipe.directions = recipe.directions
      recipe.isChecked = recipe.isChecked
      recipe.username = recipe.username
      recipe.RecipeImages = recipe.RecipeImages
      recipe.comments = [...recipe.comments, req.body.comment]
      recipe.save()
    })
    .then(resp => {
      console.log("updated")
    })
    .catch(err => {
      console.log(err)
    })

  res.json({
    message: "butthole"
  })
})

// test to update just the comments in the recipe object that is selected by the id

// router.post("/api/test-update-comments", (req, res) => {
//   id = "5deeee9442effc77a064be31"
//   comment = [{ text: "this is a comment" }]
//   Recipe.findOneAndUpdate({ _id: id }, { $set: comment }, function(recipe) {
//     console.log(res)
//     console.log(comment)
//   })
//   console.log(res)
//   res.json({
//     message: res
//   })
// })

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
  const recipe = await Recipe.find({ _id: recipeId }).catch(err => {
    console.log(err)
  })
  response.json(recipe)
})

router.delete("/recipe/:recipeId", async (request, response) => {
  let recipeId = request.params.recipeId
  const recipe = await Recipe.find({ _id: recipeId }).catch(err => {
    console.log(err)
  })
  response.json(recipe)
})

// router.get("/search", async (request, response) => {
//   console.log(request.body.searchs)
//   let search = request.body.searchs

//   const recipe = await Recipe.find({
//     recipeHeaderInfo: { name: search }
//   }).catch(err => {
//     console.log("Search", err)
//   })
//   console.log(recipe)
//   response.json(recipe)
// })

// router.get("/search", async (req, res) => {
//   const search = req.body.searchs

//   const sear = await Recipe.find({
//     recipeHeaderInfo: { name: { $regex: search, $options: "i" } }
//   }).catch(err => {
//     console.log("error", err)
//   })

//   console.log(sear)
//   res.json(sear)
// })
module.exports = router
