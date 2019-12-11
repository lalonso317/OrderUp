import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import Axios from "axios"
import { array } from "prop-types"
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
        console.log("returned", response.data)
        // const data = response.data.map(array => {
        //   return {
        //   recipe_id: array._id,
        //   recipeTitle: array.recipeHeaderInfo.name,
        //   recipeCategory: array.recipeHeaderInfo.category,
        //   recipeDescription: array.recipeHeaderInfo.description,
        //   ingredients: array.fullRecipe.ingredients,
        //   directions: array.directions,
        //   private: array.isChecked
        //   owner: array.username ? array.username : "Anon",
        //   RecipeImages: array.RecipeImages.length
        //     ? array.RecipeImages
        //     : (array.RecipeImages = [
        //         {
        //           url: default_image
        //         }
        //       ]),
        //   Comments: array.comments,
        //   recId: array.recId
        // })
        const data = response.data.map(data => {
          return {
            recipeHeader: data.recipeHeaderInfo,
            recipe_id: data._id,
            recipeIngredients: data.fullRecipe.ingredients,
            recipeDirections: data.directions,
            private: data.isChecked,
            owner: data.username ? data.username : "Anon",
            RecipeImages:
              data.RecipeImages.length > 0
                ? data.RecipeImages
                : (data.RecipeImages = [{ url: default_image }]),
            Comments: data.comments,
            recId: data.recId
          }
        })
        dispatch({
          type: GET_All_RECIPES,
          payload: data
        })
        console.log("this")
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
  console.log(all_recipes)
  return all_recipes
}
