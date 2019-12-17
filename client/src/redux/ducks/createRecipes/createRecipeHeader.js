import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

// action definitions
const GET_RECIPE_HEADER = "users/GET_USERS"

// initial state
const initialState = {
  recipeHeaderInformation: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPE_HEADER:
      return {
        ...state,
        recipeHeaderInformation: action.payload
      }
    default:
      return state
  }
}

// action creators
function setRecipeHeader(name, category, description) {
  const recipeHeading = {
    name: name,
    category: category,
    description: description
  }
  return {
    type: GET_RECIPE_HEADER,
    payload: recipeHeading
  }
}

// custom hooks
export function useCreateRecipeHeader() {
  const recipeHeaderInfo = useSelector(
    appState => appState.createRecipeHeaderState.recipeHeaderInformation
  )
  const dispatch = useDispatch()
  const recipeHeader = (name, category, description) =>
    dispatch(setRecipeHeader(name, category, description))
  useEffect(() => {}, [dispatch])

  return { recipeHeader, recipeHeaderInfo }
}
