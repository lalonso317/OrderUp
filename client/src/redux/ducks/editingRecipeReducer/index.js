import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
// action definitions
const EDITING_INGREDIENTS = "editRecipe/EDITING_INGREDIENTS"
const EDITING_DIRECTIONS = "editingRecipe/EDITING_DIRECTIONS"
const DELETING_INGREDIENTS = "editRecipe/DELETING_INGREDIENTS"
const DELETING_DIRECTIONS = "editRecipe/DELETING_DIRECTIONS"
// const USER_PROFILE = "comment/USER_PROFILE"
// initial state
const initialState = {
  ingredients: [],
  directions: []
}
// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case EDITING_DIRECTIONS:
      return { ...state, directions: [...state.directions, action.payload] }
    case EDITING_INGREDIENTS:
      return { ...state, ingredients: [...state.ingredients, action.payload] }
    case DELETING_DIRECTIONS:
      return {
        ...state,
        directions: state.directions.filter(
          direct => direct.step !== action.payload
        )
      }
    case DELETING_INGREDIENTS:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          ings => ings.ingredientName !== action.payload
        )
      }
    default:
      return state
  }
}
// direction actions
const createDirect = direct => {
  const direction = {
    step: direct
  }
  return dispatch => {
    dispatch({
      type: EDITING_DIRECTIONS,
      payload: direction
    })
  }
}

const deleteDirect = id => {
  return {
    type: DELETING_DIRECTIONS,
    payload: id
  }
}
const initialEditDirection = directs => {
  const directions = {
    step: directs
  }
  return {
    type: EDITING_INGREDIENTS,
    payload: directions
  }
}
// ingredient actions
const createingredient = ingredient => {
  const Ingredient = {
    ingredientName: ingredient
  }
  return dispatch => {
    dispatch({
      type: EDITING_INGREDIENTS,
      payload: Ingredient
    })
  }
}

const deleteingredient = id => {
  return {
    type: DELETING_INGREDIENTS,
    payload: id
  }
}
const initialEditIngredient = ings => {
  return {
    type: EDITING_INGREDIENTS,
    payload: ings
  }
}
export function useEditingRecipe(ings, directs) {
  const dispatch = useDispatch()
  const directions = useSelector(
    appState => appState.editRecipeState.directions
  )
  const ingredients = useSelector(
    appState => appState.editRecipeState.ingredients
  )
  const createdirect = (direct, i) => dispatch(createDirect(direct, i))
  const removedirect = id => dispatch(deleteDirect(id))
  const createIngredient = (ingredient, i) =>
    dispatch(createingredient(ingredient, i))
  const removeIngredient = id => dispatch(deleteingredient(id))

  useEffect(ings => {
    dispatch(initialEditIngredient(ings))
  }, [])
  useEffect(directs => {
    dispatch(initialEditDirection(directs))
  }, [])
  return {
    directions,
    ingredients,
    createdirect,
    removedirect,
    createIngredient,
    removeIngredient
  }
}
