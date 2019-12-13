import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import Axios from "axios"

const GET_SINGLE_RECIPE = "recipe-view/GET_SINGLE_RECIPE"
const ADD_RATINGS = "ratings/ADD_RATINGS"
const default_image =
  "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_960_720.jpg"

const initialState = {
  single_recipe: {},
  comments: [],
  ratings: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_SINGLE_RECIPE:
      return {
        ...state,
        single_recipe: action.payload,
        comments: action.comments
      }
    case ADD_RATINGS:
      return { ...state, ratings: [...state.ratings, action.payload] }
    default:
      return state
  }
}

const getSingleRecipe = recipeId => {
  return dispatch => {
    Axios.get(`/recipe/${recipeId}`)
      .then(response => {
        const recipe_data = {
          recipe_id: response.data[0]._id,
          recipeTitle: response.data[0].recipeHeaderInfo.name,
          recipeCategory: response.data[0].recipeHeaderInfo.category,
          recipeDescription: response.data[0].recipeHeaderInfo.description,
          ingredients: response.data[0].fullRecipe.ingredients,
          directions: response.data[0].directions,
          private: response.data[0].isChecked,
          owner: response.data[0].username ? response.data[0].username : "Anon",
          RecipeImages: response.data[0].RecipeImages.length
            ? response.data[0].RecipeImages
            : (response.data[0].RecipeImages = [
                {
                  url: default_image
                }
              ]),
          comments: response.data[0].comments,
          ratings: response.data[0].rating
            ? response.data[0].rating
            : [{by_user: "Anon", value: 3}]
        }
        const comments = response.data[0].comments
        dispatch({
          type: GET_SINGLE_RECIPE,
          payload: recipe_data,
          comments: comments
        })
      })

      .catch(error => {
        return {
          message: `something is wrong ===============>> ${error}`
        }
      })
  }
}

const addRating = (recipeId, user, value) => {
  return dispatch => {
    Axios.post(`/recipe/${recipeId}`, { by_user: user, value: value }).then(
      response => {
        dispatch({
          type: ADD_RATINGS,
          payload: response.data
        })
      }
    )
  }
}

export const useSingleRecipe = recipeId => {
  const dispatch = useDispatch()
  const single_recipe = useSelector(
    appState => appState.singleRecipeState.single_recipe
  )
  const SpecificComments = useSelector(
    appState => appState.singleRecipeState.comments
  )
  const add = (recipeId, user, value) => {
    dispatch(addRating(recipeId, user, value))
  }
  const getSingleRecipeComment = id => dispatch(getSingleRecipe(id))

  useEffect(() => {
    dispatch(getSingleRecipe(recipeId))
  }, [dispatch, recipeId])

  return {
    add,
    single_recipe,
    default_image,
    SpecificComments,
    getSingleRecipeComment
  }
}
