import React from "react"
import {
  useFullRecipe,
  useCreateRecipeHeader,
  useDirections
} from "../../hooks"
import CreateRecipeHeader from "./create_recipe_header"

function SubmitRecipeButton(props) {
  const { fullRecipe, CreateRecipe } = useFullRecipe()
  const { recipeHeaderInfo } = useCreateRecipeHeader()
  const { directions } = useDirections()
  function handleSubmit(e) {
    e.preventDefault()

    CreateRecipe(actualRecipe)
  }
  const actualRecipe = [recipeHeaderInfo, fullRecipe, directions]
  console.log("actual recipe", actualRecipe)

  return (
    <form onSubmit={handleSubmit} className="createRecipeSubmitButtonForm">
      <button type="submit">Create Recipe</button>
    </form>
  )
}

export default SubmitRecipeButton
