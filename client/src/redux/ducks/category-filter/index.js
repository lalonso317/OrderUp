import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { useAllRecipes } from "../viewRecipes"
// action definitions
const FILTERED_BY_CATEGORY = "category-filter/FILTERED_BY_CATEGORY"
const INITIAL_RECIPES = "category-filter/INITIAL_RECIPES"

// initial state
const initialState = {
  categoryRecipes: []
}
// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case FILTERED_BY_CATEGORY:
      return { ...state, categoryRecipes: action.payload }
    case INITIAL_RECIPES:
      return { ...state, categoryRecipes: action.payload }
    default:
      return state
  }
}

function filterByCategory(recipes) {
  return {
    type: FILTERED_BY_CATEGORY,
    payload: recipes
  }
}
function initialRecipes(recipes) {
  return {
    type: INITIAL_RECIPES,
    payload: recipes
  }
}
export const useFilteredCategoryRecipes = () => {
  const all_recipes = useAllRecipes()
  const dispatch = useDispatch()
  const categoryRecipes = useSelector(
    appState => appState.filteredByCategoryState.categoryRecipes
  )
  const categoryFilter = recipes => dispatch(filterByCategory(recipes))
  const firstSetRecipes = recipes => dispatch(initialRecipes(recipes))
  useEffect(() => {
    dispatch(initialRecipes(all_recipes))
  }, [])
  return { categoryRecipes, categoryFilter, firstSetRecipes }
}
