import React from "react"
import Toggle from "./login/toggle"
import { BrowserRouter as Router, Route } from "react-router-dom"
import "semantic-ui-css/semantic.min.css"
import PublicHomePage from "./home/index"
import CreateRecipeViewPage from "./recipe/create-recipe-viewpage"
import UserProfileMain from "./profile/profilePage"
import ViewRecipeSingle from "./view-recipe/recipe-single-view"
import MultiRecipeLoader from "./view-recipe/multi-recipe-loader"
import ImageUploader from "./pictureUpload/upload-pictures"
import "../styles/recipe/ings_and_meas.css"
import "../styles/recipe/index.css"
import "../styles/recipe/ingredient-list.css"
import "../styles/recipe/createRecipeHeader.css"
import "../styles/recipe/createRecipeDirections.css"
import "../styles/recipe/createRecipeSubmitButton.css"
import "../styles/profile/profilePage.css"
import "../styles/login/signIn.css"
import "../styles/recipe-view-css/recipe-single-view.css"
import "../styles/recipe/create-recipe-viewpage.css"
import UniversalFooter from "./home/universalFooter"
import Header from "./home/Header"

const App = props => {
  return (
    <Router>
      <Header
        link_twitter="https://twitter.com/?lang=en"
        link_facebook="https://www.facebook.com/"
        link_reddit="https://www.reddit.com/"
        link_instagram="https://www.instagram.com/"
      />
      <Route exact path={"/"} component={PublicHomePage} />
      <Route path="/login" component={Toggle} />
      <Route path="/create-your-recipe" component={CreateRecipeViewPage} />
      <Route path={"/recipe-single-view"} component={ViewRecipeSingle} />
      <Route path={"/profile-page"} component={UserProfileMain} />
      <Route path={"/all-recipes"} component={MultiRecipeLoader} />
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
