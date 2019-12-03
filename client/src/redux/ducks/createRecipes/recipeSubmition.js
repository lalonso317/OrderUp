import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"

const FINALIZE_INGREDIENT = "FINALIZE_INGREDIENT"

const initialState = {
  recipeObjects: [],
  isActive: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FINALIZE_INGREDIENT:
      return {
        ...state,
        recipeObjects: [...state.recipeObjects, action.payload]
      }
    default:
      return state
  }
}

const finalIngredients = ingredients => {
  console.log(ingredients)
  const ings = {
    ingredientName: ingredients.IngredientName,
    measurement: ingredients.Amount,
    isActive: ingredients.active
  }
  return {
    type: FINALIZE_INGREDIENT,
    payload: ings
  }
}

export const useFullRecipe = () => {
  const dispatch = useDispatch()
  // selector to grab the full recipe
  const fullRecipe = useSelector(
    appState => appState.fullRecipeState.recipeObjects
  )
  // function to send confirmed ingredient
  const finalIngredient = amount => dispatch(finalIngredients(amount))

  return { finalIngredient, fullRecipe }
}
