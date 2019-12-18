import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
const FINALIZE_INGREDIENT = "FINALIZE_INGREDIENT"
const SUBMITTED_FULL_RECIPE = "SUBMITTED_FULL_RECIPE"
const INITAL_INGREDIENT = "INITAL_INGREDIENT"
const DELETE_INGREDIENT = "DELETE_INGREDIENT"
const GET_RECIPES = "GET_RECIPES"
const ADD_IMAGES = "ADD_IMAGES"
const INITAL_IMAGE = "INTIAL_IMAGES"
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
    case INITAL_INGREDIENT:
      return { ...state, recipeObjects: [] }
    case INITAL_IMAGE:
      return { ...state, recipeImages: [] }
    default:
      return state
  }
}
const finalIngredients = amount => {
  const ings = {
    ingredientName: amount
  }
  return {
    type: FINALIZE_INGREDIENT,
    payload: ings
  }
}
const initalIngredients = () => {
  return {
    type: INITAL_INGREDIENT
  }
}
// final submit for recipe function
const finalSubmitForRecipe = (
  recipeHeaderInfo,
  fullRecipe,
  directions,
  isChecked,
  username,
  RecipeImages
) => {
  return dispatch => {
    axios
      .post("/api/Recipe", {
        recipeHeaderInfo,
        fullRecipe: { ingredients: fullRecipe },
        directions,
        isChecked,
        username,
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
// action to add images to recipeImages array in reducer
const addImages = url => {
  return {
    type: ADD_IMAGES,
    payload: url
  }
}
const initalImg = () => {
  return {
    type: INITAL_IMAGE
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
  // const allRecipes = useSelector(appState => appState.fullRecipeState.recipes)
  // function to send confirmed ingredient
  const finalIngredient = amount => dispatch(finalIngredients(amount))
  const remove = id => dispatch(deleteIngredients(id))
  const initalIMG = () => dispatch(initalImg())
  //function to submit full recipe to back-end
  const CreateRecipe = (
    recipeHeaderInfo,
    fullRecipe,
    directions,
    isChecked,
    username,
    RecipeImages
  ) =>
    dispatch(
      finalSubmitForRecipe(
        recipeHeaderInfo,
        fullRecipe,
        directions,
        isChecked,
        username,
        RecipeImages
      )
    )
  //function to be called by the image uploader to provide the created URL's for the recipe images
  const newImage = url => dispatch(addImages(url))
  const RecipeImages = useSelector(
    appState => appState.fullRecipeState.recipeImages
  )
  const initalIng = () => dispatch(initalIngredients())
  return {
    finalIngredient,
    fullRecipe,
    CreateRecipe,
    recipeList,
    // allRecipes,
    remove,
    newImage,
    RecipeImages,
    initalIng,
    initalIMG
  }
}
