import { useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const UPDATE_RECIPE = "updateRecipes/UPDATE_RECIPE"
const UPDATE_FAILED = "updateRecipes/UPDATE_FAILED"
// initial state
const initialState = {
  updatedRecipe: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_RECIPE:
      return {
        ...state,
        updatedRecipe: action.payload
      }
    default:
      return state
  }
}

//actions

const updateRecipe = (
  recipeHeaderInfo,
  fullRecipe,
  directions,
  isChecked,
  username,
  RecipeImages,
  recId,
  dispatch
) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/update-recipe", {
        recipeHeaderInfo,
        fullRecipe,
        directions,
        isChecked,
        username,
        RecipeImages,
        recId
      })
      .then(resp => {
        dispatch({
          type: UPDATE_RECIPE
        })
        resolve()
      })
      .catch(e => {
        dispatch({
          type: UPDATE_FAILED
        })
        reject()
      })
  })
}

export function useUpdate() {
  const dispatch = useDispatch()
  const update = (
    recipeHeaderInfo,
    fullRecipe,
    directions,
    isChecked,
    username,
    RecipeImages,
    recId
  ) => {
    return updateRecipe(
      recipeHeaderInfo,
      fullRecipe,
      directions,
      isChecked,
      username,
      RecipeImages,
      recId,
      dispatch
    )
  }

  return { update }
}
