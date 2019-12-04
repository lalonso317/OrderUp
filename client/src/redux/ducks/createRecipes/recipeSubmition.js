import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"

const FINALIZE_INGREDIENT = "FINALIZE_INGREDIENT"
const SUBMITTED_FULL_RECIPE = "SUBMITTED_FULL_RECIPE"

const initialState = {
  recipeObjects: [],
  isActive: false,
  recipeDone: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FINALIZE_INGREDIENT:
      return {
        ...state,
        recipeObjects: [...state.recipeObjects, action.payload]
      }
    case SUBMITTED_FULL_RECIPE:
      return { ...state, recipeDone: [...state.recipeDone, action.payload] }
    default:
      return state
  }
}

const finalIngredients = ingredients => {
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
    axios.post("/api/Recipe/", recipe).then(resp => {
      console.log(resp.data.recipeName)
      const submittedRecipe = {
        name: resp.data.recipeName[0].name,
        category: resp.data.recipeName[0].category,
        description: resp.data.recipeName[0].description,
        ingredientNames: resp.data.recipeName[1].map(item => {
          return { name: item.ingredientName, measurement: item.measurement }
        }),
        directions: resp.data.recipeName[2].map(item => {
          return { direction: item.step }
        }),
        privacy: resp.data.recipeName[3],
        user: resp.data.recipeName[4]
      }
      console.log(submittedRecipe)
      dispatch({
        type: SUBMITTED_FULL_RECIPE,
        payload: submittedRecipe
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
  const recipeList = useSelector(
    appState => appState.fullRecipeState.recipeDone
  )
  // function to send confirmed ingredient
  const finalIngredient = amount => dispatch(finalIngredients(amount))

  //function to submit full recipe to back-end
  const CreateRecipe = recipe => dispatch(finalSubmitForRecipe(recipe))

  return { finalIngredient, fullRecipe, CreateRecipe, recipeList }
}
