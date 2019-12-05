import React from "react"
import Toggle from "./login/toggle"
import IngredientList from "./recipe/ingredient-list"
import { BrowserRouter as Router, Route } from "react-router-dom"
import CreateRecipeHeader from "../components/recipe/create_recipe_header"
import IngsAndMeas from "../components/recipe/ingredients_and_measurements"
import "semantic-ui-css/semantic.min.css"
import PublicHomePage from "./home/index"
import RecipeDirections from "./recipe/createRecipe-Directions"
import CreateRecipeViewPage from "./recipe/create-recipe-viewpage"
import UserProfileMain from "./profile/profilePage"
import ViewRecipeMulti from "./view-recipe/recipe-multi-view"
import ViewRecipeSingle from "./view-recipe/recipe-single-view"
import "../styles/recipe/ings_and_meas.css"
import "../styles/recipe/index.css"
import "../styles/recipe/ingredient-list.css"
import "../styles/recipe/createRecipeHeader.css"
import "../styles/recipe/createRecipeDirections.css"
import "../styles/recipe/createRecipeSubmitButton.css"
import "../styles/profile/profilePage.css"
import "../styles/login/signIn.css"
import "../styles/recipe-view-css/recipe-single-view.css"
const App = props => {
  return (
    <Router>
      <Route exact path={"/"} component={PublicHomePage} />
      <Route path="/login" component={Toggle} />
      <Route path="/create-your-recipe" component={CreateRecipeViewPage} />
      <Route path={"/profilePage"} component={UserProfileMain} />
      <Route path={"/recipe-multi-view"} component={ViewRecipeMulti} />
      <Route path={"/recipe-single-view"} component={ViewRecipeSingle} />
      {/* <div className="ingsList-IandM">
        <IngredientList />
        <IngsAndMeas />
      </div>
      <RecipeDirections /> */}
    </Router>
  )
}

export default App
