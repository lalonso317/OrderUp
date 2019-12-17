import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
// action definitions
const EDITING_INGREDIENTS = "editRecipe/EDITING_INGREDIENTS"
const EDITING_DIRECTIONS = "editingRecipe/EDITING_DIRECTIONS"
const DELETING_INGREDIENTS = "editRecipe/DELETING_INGREDIENTS"
const DELETING_DIRECTIONS = "editRecipe/DELETING_DIRECTIONS"
const INITIAL_SHIT = "editRecipe/INITIAL_SHIT"

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
    case INITIAL_SHIT:
      return {
        ...state,
        ingredients: action.ingredients,
        directions: action.directions
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
// ingredient actions
const createingredient = ingredient => {
  const ingred = {
    ingredientName: ingredient
  }
  return dispatch => {
    dispatch({
      type: EDITING_INGREDIENTS,
      payload: ingred
    })
  }
}

const deleteingredient = id => {
  return {
    type: DELETING_INGREDIENTS,
    payload: id
  }
}
// function for loading recipe to be edited (ingredients and directions)
const initialShit = recipe => {
  const ingreds = recipe.ingredients
  const directs = recipe.directions
  return {
    type: INITIAL_SHIT,
    ingredients: ingreds,
    directions: directs
  }
}

export const useEditingRecipe = () => {
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
  const initial = recipe => dispatch(initialShit(recipe))
  useEffect(() => {
    // dispatch(initialShit(recipe))
  }, [dispatch])
  return {
    directions,
    ingredients,
    createdirect,
    removedirect,
    createIngredient,
    removeIngredient,
    initial
  }
}
