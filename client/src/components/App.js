import React from "react"
import Toggle from "./login/toggle"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "semantic-ui-css/semantic.min.css"
import PublicHomePage from "./home/index"
import CreateRecipeViewPage from "./recipe/create-recipe-viewpage"
import UserProfileMain from "./profile/profilePage"
import ViewRecipeSingle from "./view-recipe/recipe-single-view"
import MultiRecipeLoader from "./view-recipe/multi-recipe-loader"
import EditRecipe from "./recipe/edit-recipe-page"
import EditProfile from "./profile/editProfile"
import "../styles/recipe/ings_and_meas.css"
import "../styles/recipe/index.css"
import "../styles/recipe/createRecipeHeader.css"
import "../styles/recipe/createRecipeDirections.css"
import "../styles/recipe/createRecipeSubmitButton.css"
import "../styles/profile/profilePage.css"
import "../styles/login/signIn.css"
import "../styles/recipe-view-css/recipe-single-view.css"
import "../styles/recipe/create-recipe-viewpage.css"
import "../styles/home/site-features.css"
import "../styles/recipe/editRecipePage.css"
import "bootstrap/dist/css/bootstrap.min.css"
import UniversalFooter from "./home/universalFooter"
import Header from "./home/Header"
import Card from './Card'

const App = props => {
  return (
    <Router>
      <Header
        link_twitter="https://twitter.com/?lang=en"
        link_facebook="https://www.facebook.com/"
        link_reddit="https://www.reddit.com/"
        link_instagram="https://www.instagram.com/"
      />
      <Route path="/test" component={Card} />
      <Route exact path={"/"} component={PublicHomePage} />
      <Route component={Toggle} />
      <Route path="/create-your-recipe" component={CreateRecipeViewPage} />
      <Route path="/profile-page/:username" component={UserProfileMain} />
      <Route path="/edit-profile/:username" component={EditProfile} />
      <Route path={"/recipe/:id"} component={ViewRecipeSingle} />
      <Route path={"/all-recipes"} component={MultiRecipeLoader} />
      <Route path={"/edit-recipe/:recipeId"} component={EditRecipe} />

      <UniversalFooter
        link_twitter="https://twitter.com/?lang=en"
        link_facebook="https://www.facebook.com/"
        link_reddit="https://www.reddit.com/"
        link_instagram="https://www.instagram.com/"
      />
    </Router>
  )
}

export default App
