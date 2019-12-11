import React from "react"
import MultiRecipeViewPage from "./multi-recipe-view-page"
import { useAllRecipes } from "../../hooks"
// import ProfilePage from "../profile/profilePage"

const MultiRecipeLoader = props => {
  const all_recipes = useAllRecipes()
 
  return (
    <div>
      <MultiRecipeViewPage
        recipeArray={all_recipes.filter(e => e.private === false)}
      />
    </div>
  )
}

export default MultiRecipeLoader
