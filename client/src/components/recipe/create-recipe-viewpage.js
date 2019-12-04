import React from "react"
import CreateRecipeHeader from "./create_recipe_header"
import IngredientList from "./ingredient-list"
import IngredientsAndMeasurements from './ingredients_and_measurements'
import RecipeDirections from './createRecipe-Directions'
import '../../styles/recipe/create-recipe-viewpage.css'

const CreateRecipeViewPage = props => {
  return (
    <div className="create-recipe-viewpage-container">
      <CreateRecipeHeader />
      <div className="create-recipe-viewpage-ingredient-selection">
      <IngredientList />
      <IngredientsAndMeasurements />
      <RecipeDirections />
      </div>
    </div>
  )
}

export default CreateRecipeViewPage
