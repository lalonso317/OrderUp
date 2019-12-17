import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import Axios from "axios"

const default_image =
  "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_960_720.jpg"

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
        const data = response.data.map(data => {
          return {
            recipeTitle: data.recipeHeaderInfo ? data.recipeHeaderInfo.name : 'No Title Found',
            recipeCategory: data.recipeHeaderInfo ? data.recipeHeaderInfo.category : 'No Category Found',
            recipeDescription: data.recipeHeaderInfo ? data.recipeHeaderInfo.description : 'No Description Found',
            recipe_id: data._id,
            recipeIngredients: data.fullRecipe.ingredients,
            recipeDirections: data.directions,
            private: data.isChecked,
            owner: data.username ? data.username : "Anon",
            RecipeImages:
              data.RecipeImages.length 
                ? data.RecipeImages
                : (data.RecipeImages = [{ url: default_image }]),
            Comments: data.comments,
            recId: data.recId,
            ratings: data.rating
          }
        })
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
