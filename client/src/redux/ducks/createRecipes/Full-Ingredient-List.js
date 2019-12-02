import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"

const GET_FULL_INGREDIENTS_LIST = "createRecipe/GET_FULL_INGREDIENTS_LIST"
const GET_MAIN_FOOD_GROUPS = "createRecipe/GET_MAIN_FOOD_GROUPS"

const initialState = {
  ingredients: [],
  food_group: [],
  food_subgroup: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FULL_INGREDIENTS_LIST:
      return { ...state, ingredients: action.payload }
    case GET_MAIN_FOOD_GROUPS:
      return { ...state, food_group: action.payload }
    default:
      return state
  }
}

const getIngredients = () => {
  return dispatch => {
    axios.get("/ingredients-list").then(response => {
      dispatch({
        type: GET_FULL_INGREDIENTS_LIST,
        payload: response.data
      })
      dispatch(getMainFoodGroups(response.data))
    })
  }
}

const getMainFoodGroups = ingredients => {
  let array = []

  ingredients.forEach(ingredient => {
    array = array.concat(ingredient.food_group)
  })

  const unique = Array.from(new Set(array))

  return {
    type: GET_MAIN_FOOD_GROUPS,
    payload: unique
  }
}

export const useIngredientsList = () => {
  const dispatch = useDispatch()
  const ingredients = useSelector(
    appState => appState.ingredientListState.ingredients
  )
  const food_group = useSelector(
    appState => appState.ingredientListState.food_group
  )

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  return { ingredients, food_group }
}
