import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"

const FINALIZE_INGREDIENT = "FINALIZE_INGREDIENT"
const SUBMITTED_FULL_RECIPE = "SUBMITTED_FULL_RECIPE"

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
    case SUBMITTED_FULL_RECIPE:
      return state
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
// final submit for recipe function
const finalSubmitForRecipe = recipe => {
  return dispatch => {
    axios.post("/createRecipe", { recipe }).then(resp => {
      dispatch({
        type: SUBMITTED_FULL_RECIPE
      })
    })
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
  //function to submit full recipe to back-end
  const CreateRecipe = recipe => dispatch(finalSubmitForRecipe(recipe))

  return { finalIngredient, fullRecipe, CreateRecipe }
}
