import React from "react"
import MultiRecipeViewPage from "./multi-recipe-view-page"
import { useAllRecipes, useFilteredCategoryRecipes } from "../../hooks"
// import ProfilePage from "../profile/profilePage"

const MultiRecipeLoader = props => {
  const all_recipes = useAllRecipes()
  const { categoryRecipes } = useFilteredCategoryRecipes()
  console.log("these are the category specific recipes", categoryRecipes)
  const FilteredRecipes = categoryRecipes.filter(e => e.private === false)
  return (
    <div>
      <MultiRecipeViewPage recipeArray={FilteredRecipes} />
    </div>
  )
}

export default MultiRecipeLoader
