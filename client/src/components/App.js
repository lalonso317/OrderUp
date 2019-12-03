import React from "react"

import IngredientList from "./recipe/ingredient-list"
import { BrowserRouter as Router, Route } from "react-router-dom"
import CreateRecipeHeader from "../components/recipe/create_recipe_header"
import "semantic-ui-css/semantic.min.css"
const App = props =>  {
  return (
    <Router>
      <Route path={"/"} component={CreateRecipeHeader} />
      <IngredientList />
    </Router>
  )
}

export default App
