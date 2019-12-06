import React from "react"
import { Route, Switch } from "react-router-dom"
import PrivateHomePage from "../home/PrivateHome"
import CreateRecipeViewPage from "../recipe/create-recipe-viewpage"
import UserProfileMain from "../profile/profilePage"

const Protected = () => {
  return (
    <div>
      <Route>
        <Switch>
          <Route path={"/privateHome"} component={PrivateHomePage} />
          <Route path="/create-your-recipe" component={CreateRecipeViewPage} />
          <Route path={"/profile-page"} component={UserProfileMain} />
        </Switch>
      </Route>
    </div>
  )
}

export default Protected
