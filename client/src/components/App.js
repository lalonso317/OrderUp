import React from "react"
import Toggle from "./login/toggle"
import IngredientList from "./recipe/ingredient-list"
import { BrowserRouter as Router, Route } from "react-router-dom"
import CreateRecipeHeader from "../components/recipe/create_recipe_header"
import "semantic-ui-css/semantic.min.css"
import RecipeDirections from "./recipe/createRecipe-Directions"

const App = props => {
  return (
    <Router>
      <Toggle />
      <Route path={"/"} component={CreateRecipeHeader} />
      <IngredientList />
      <RecipeDirections />
    </Router>
  )
}

export default App
