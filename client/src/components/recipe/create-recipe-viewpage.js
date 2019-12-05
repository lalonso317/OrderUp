import React from "react"
import CreateRecipeHeader from "./create_recipe_header"
import IngredientList from "./ingredient-list"
import IngredientsAndMeasurements from "./ingredients_and_measurements"
import RecipeDirections from "./createRecipe-Directions"
import SetIngredients from "./recipe-List"
import SubmitRecipeButton from "./submitRecipeButton"
import "../../styles/recipe/create-recipe-viewpage.css"

const CreateRecipeViewPage = props => {
  return (
    <div className="create-recipe-viewpage-container">
      <SubmitRecipeButton />
      {/* <CreateRecipeHeader />
      <div className="create-recipe-viewpage-ingredient-selection">
        <SetIngredients />
        <RecipeDirections />
      </div> */}
    </div>
  )
}

export default CreateRecipeViewPage
