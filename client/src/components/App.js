import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import CreateRecipeHeader from "../components/recipe/create_recipe_header"
import "semantic-ui-css/semantic.min.css"
function App() {
  return (
    <Router>
      <Route path={"/"} component={CreateRecipeHeader} />
    </Router>
  )
}

export default App
