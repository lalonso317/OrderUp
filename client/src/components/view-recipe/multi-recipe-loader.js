import React from 'react'
import MultiRecipeViewPage from './multi-recipe-view-page'
import { useAllRecipes } from "../../hooks"


const MultiRecipeLoader = props => {
  const all_recipes = useAllRecipes()

  
  return (
    <div>
      <MultiRecipeViewPage recipeArray={all_recipes}/>
    </div>
  )
}


export default MultiRecipeLoader