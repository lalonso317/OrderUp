// Imports ---------------------------------------------------------------->>>

import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import axios from "axios"

// // Action Names ---------------------------------------------------------------->>>

// const GET_FULL_INGREDIENTS_LIST = "createRecipe/GET_FULL_INGREDIENTS_LIST"
// const GET_MAIN_FOOD_GROUPS = "createRecipe/GET_MAIN_FOOD_GROUPS"
// const GET_SUB_FOOD_GROUPS = "createRecipe/GET_SUB_FOOD_GROUPS"
// const PICKED_INGREDIENT = "createRecipe/PICKED_INGREDIENT"
// const DELETED_INGREDIENT = "createRecipe/DELETED_INGREDIENT"
// // Reducer ---------------------------------------------------------------->>>
// const initialState = {
//   ingredients: [],
//   food_group: [],
//   food_subgroup: [],
//   picked: []
// }

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case GET_FULL_INGREDIENTS_LIST:
//       return { ...state, ingredients: action.payload }
//     case GET_MAIN_FOOD_GROUPS:
//       return { ...state, food_group: action.payload }
//     case GET_SUB_FOOD_GROUPS:
//       return { ...state, food_subgroup: action.payload }
//     case PICKED_INGREDIENT:
//       return { ...state, picked: [...state.picked, action.payload] }
//     case DELETED_INGREDIENT:
//       return { ...state, picked: action.payload }
//     default:
//       return state
//   }
// }

// Action Creators ---------------------------------------------------------------->>>

// const getIngredients = () => {
//   // grabbing entire ingredient list from route and putting list into initialState.ingredients
//   return dispatch => {
//     axios.get("/ingredients-list").then(response => {
//       dispatch({
//         type: GET_FULL_INGREDIENTS_LIST,
//         payload: response.data
//       })
//       // after getting data then dispatching functions to grab food groups
//       dispatch(getMainFoodGroups(response.data))
//       dispatch(getSubFoodGroups(response.data))
//     })
//   }
// }

// const getMainFoodGroups = ingredients => {
//   // takes in array of ingredients generated from the get Ingredients function

//   // declaring empty array so it can be updated later
//   let array = []

//   // going through each ingredient and taking all food_groups and concating them to the array from earlier
//   ingredients.forEach(ingredient => {
//     array = array.concat(ingredient.food_group)
//   })

//   // going through the array that food_groups were pushed to and grabs only the unique groups
//   const unique = Array.from(new Set(array))

//   return {
//     type: GET_MAIN_FOOD_GROUPS,
//     // will only put the unique values into the initialState.food_group
//     payload: unique
//   }
// }

// const getSubFoodGroups = ingredients => {
//   // same as the getMainFoodGroups function except for the sub groups.

//   let array = []

//   ingredients.forEach(ingredient => {
//     array = array.concat(ingredient.food_subgroup)
//   })

//   const unique = Array.from(new Set(array))

//   return {
//     type: GET_SUB_FOOD_GROUPS,
//     payload: unique
//   }
// }

// const pickedIngredient = name => {
//   const picked = {
//     name: name.ingredient,
//     isActive: name.active
//   }
//   return {
//     type: PICKED_INGREDIENT,
//     payload: picked
//   }
// }

// const deleteIngredient = name => {
//   return {
//     type: DELETED_INGREDIENT,
//     payload: name
//   }
// }
// Hooks ---------------------------------------------------------------->>>

// export const useIngredientsList = () => {
//   const dispatch = useDispatch()
//   const ingredients = useSelector(
//     appState => appState.ingredientListState.ingredients
//   )
//   const food_group = useSelector(
//     appState => appState.ingredientListState.food_group
//   )

//   const food_subgroup = useSelector(
//     appState => appState.ingredientListState.food_subgroup
//   )
//   // function to be used when an ingredient is selected
//   const picked = name => dispatch(pickedIngredient(name))
//   const pickedItem = useSelector(
//     appState => appState.ingredientListState.picked
//   )
//   // function to be used when an ingredient is deleted from the list
//   const deleteItem = name => dispatch(deleteIngredient(name))
//   // wherever function is called the useEffect will run right away and update on dispatch.

//   useEffect(() => {
//     dispatch(getIngredients())
//   }, [dispatch])

//   return {
//     ingredients,
//     food_group,
//     food_subgroup,
//     picked,
//     pickedItem,
//     deleteItem
//   }
// }
