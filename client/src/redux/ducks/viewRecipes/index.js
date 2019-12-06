import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import Axios from "axios"

const GET_All_RECIPES = "recipe-view/GET_ALL_RECIPES"

const initialState = {
  all_recipes: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_All_RECIPES:
      return { ...state, all_recipes: action.payload }
    default:
      return state
  }
}

const getRecipes = () => {
  return dispatch => {
    Axios.get("/api/Recipe")
      .then(response => {
        const data = response.data.map(array => ({
          recipe_id: array._id,
          recipeTitle: array.recipeHeaderInfo.name,
          recipeCategory: array.recipeHeaderInfo.category,
          recipeDescription: array.recipeHeaderInfo.description,
          ingredients: array.fullRecipe.ingredients,
          directions: array.directions,
          private: array.isChecked,
          owner: array.user,
          RecipeImages: array.RecipeImages
        }))
        dispatch({
          type: GET_All_RECIPES,
          payload: data
        })
      })
      .catch(error => ({
        message: error
      }))
  }
}

export const useAllRecipes = () => {
  const dispatch = useDispatch()
  const all_recipes = useSelector(
    appState => appState.allRecipeState.all_recipes
  )

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch])

  return all_recipes
}
