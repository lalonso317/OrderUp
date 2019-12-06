import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"

const FINALIZE_INGREDIENT = "FINALIZE_INGREDIENT"
const SUBMITTED_FULL_RECIPE = "SUBMITTED_FULL_RECIPE"

const DELETE_INGREDIENT = "DELETE_INGREDIENT"
const GET_RECIPES = "GET_RECIPES"
const ADD_IMAGES = "ADD_IMAGES"

const initialState = {
  recipeObjects: [],
  isActive: false,
  recipeDone: [],
  recipes: [],
  recipeImages: []
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
    case GET_RECIPES:
      return { ...state, recipes: action.payload }
    case ADD_IMAGES:
      return { ...state, recipeImages: [...state.recipeImages, action.payload] }
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
  user,
  RecipeImages
) => {
  return dispatch => {
    axios
      .post("/api/Recipe", {
        recipeHeaderInfo,
        fullRecipe: { ingredients: fullRecipe },
        directions,
        isChecked,
        user,
        RecipeImages
      })
      .then(resp => {
        dispatch({
          type: SUBMITTED_FULL_RECIPE,
          payload: resp.data
        })
      })
  }
}
const deleteIngredients = id => {
  return {
    type: DELETE_INGREDIENT,
    payload: id
  }
}

const getRecipes = () => {
  return dispatch => {
    axios.get("/api/Recipe").then(response => {
      const data = response.data.map(array => ({
        recipe_id: array._id,
        recipeTitle: array.recipeHeaderInfo.name,
        recipeCategory: array.recipeHeaderInfo.category,
        recipeDescription: array.recipeHeaderInfo.description,
        ingredients: array.fullRecipe.ingredients,
        directions: array.directions,
        private: array.isChecked,
        owner: array.user
      }))
      dispatch({
        type: GET_RECIPES,
        payload: data
      })
    })
  }
}
// action to add images to recipeImages array in reducer
const addImages = url => {
  return {
    type: ADD_IMAGES,
    payload: url
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
  const allRecipes = useSelector(appState => appState.fullRecipeState.recipes)
  // function to send confirmed ingredient
  const finalIngredient = amount => dispatch(finalIngredients(amount))

  const remove = id => dispatch(deleteIngredients(id))

  //function to submit full recipe to back-end
  const CreateRecipe = (
    recipeHeaderInfo,
    fullRecipe,
    directions,
    isChecked,
    user,
    RecipeImages
  ) =>
    dispatch(
      finalSubmitForRecipe(
        recipeHeaderInfo,
        fullRecipe,
        directions,
        isChecked,
        user,
        RecipeImages
      )
    )
  //function to be called by the image uploader to provide the created URL's for the recipe images
  const newImage = url => dispatch(addImages(url))
  const RecipeImages = useSelector(
    appState => appState.fullRecipeState.recipeImages
  )

  useEffect(() => {
    dispatch(getRecipes())
  }, [dispatch])

  return {
    finalIngredient,
    fullRecipe,
    CreateRecipe,
    recipeList,
    allRecipes,
    remove,
    newImage,
    RecipeImages
  }
}

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
