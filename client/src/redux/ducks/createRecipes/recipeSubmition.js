import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"

const FINALIZE_INGREDIENT = "FINALIZE_INGREDIENT"
const SUBMITTED_FULL_RECIPE = "SUBMITTED_FULL_RECIPE"
const DELETE_INGREDIENT = "DELETE_INGREDIENT"

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
    case DELETE_INGREDIENT:
      return {
        ...state,
        recipeObjects: state.recipeObjects.filter(
          ingred => ingred.ingredientName !== action.payload
        )
      }
    default:
      return state
  }
}

const finalIngredients = amount => {
  const ings = {
    ingredientName: amount
  }
  console.log(ings)
  return {
    type: FINALIZE_INGREDIENT,
    payload: ings
  }
}

// final submit for recipe function
const finalSubmitForRecipe = (
  recipeHeaderInfo,
  fullRecipe,
  directions,
  isChecked,
  user
) => {
  return dispatch => {
    axios
      .post("/api/Recipe", {
        recipeHeaderInfo,
        fullRecipe,
        directions,
        isChecked,
        user
      })
      .then(resp => {
        console.log(resp.data)
        // const submittedRecipe = {
        //   name: resp.data.recipeName[0].name,
        //   category: resp.data.recipeName[0].category,
        //   description: resp.data.recipeName[0].description,
        //   ingredientNames: resp.data.recipeName[1].map(item => {
        //     return { name: item.ingredientName, measurement: item.measurement }
        //   }),
        //   directions: resp.data.recipeName[2].map(item => {
        //     return { direction: item.step }
        //   }),
        //   privacy: resp.data.recipeName[3],
        //   user: resp.data.recipeName[4]
        // }
        // console.log(submittedRecipe)
        dispatch({
          type: SUBMITTED_FULL_RECIPE
          // payload: submittedRecipe
        })
      })
  }
}
const deleteIngredients = id => {
  console.log(id)
  return {
    type: DELETE_INGREDIENT,
    payload: id
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

  const remove = id => dispatch(deleteIngredients(id))

  //function to submit full recipe to back-end
  const CreateRecipe = (
    recipeHeaderInfo,
    fullRecipe,
    directions,
    isChecked,
    user
  ) =>
    dispatch(
      finalSubmitForRecipe(
        recipeHeaderInfo,
        fullRecipe,
        directions,
        isChecked,
        user
      )
    )

  return { finalIngredient, fullRecipe, CreateRecipe, recipeList, remove }
}
