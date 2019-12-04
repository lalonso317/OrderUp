import React from "react"
import Toggle from "./login/toggle"
import IngredientList from "./recipe/ingredient-list"
import { BrowserRouter as Router, Route } from "react-router-dom"
import CreateRecipeHeader from "../components/recipe/create_recipe_header"
import IngsAndMeas from "../components/recipe/ingredients_and_measurements"
import "semantic-ui-css/semantic.min.css"
import PublicHomePage from './home/index'
import RecipeDirections from "./recipe/createRecipe-Directions"
import "../styles/recipe/ings_and_meas.css"
import "../styles/recipe/index.css"
import "../styles/recipe/ingredient-list.css"
import "../styles/recipe/createRecipeHeader.css"


const App = props => {
  return (
    <Router>
      <Toggle />
      <Route path={"/"} component={CreateRecipeHeader} />
      <IngredientList />
      <PublicHomePage />
      <div className="ingsList-IandM">
        <IngredientList />
        <IngsAndMeas />
      </div>
     <RecipeDirections />
    </Router>
  )
}

export default App
