import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import Axios from "axios"

const CREATE_DIRECTIONS = "direct/CREATE_DIRECTIONS"
const DELETE_DIRECTIONS = "direct/DELETE_DIRECTIONS"

const initalState = {
  directions: []
}

export default (state = initalState, action) => {
  switch (action.type) {
    case CREATE_DIRECTIONS:
      return {
        ...state,
        directions: [action.payload, ...state.directions]
      }
    case DELETE_DIRECTIONS:
      return {
        ...state,
        directions: state.directions.filter(
          direct => direct.step !== action.payload
        )
      }
    default:
      return state
  }
}

const createDirect = direct => {
  const direction = {
    step: direct
  }
  console.log(direction)
  return {
    type: CREATE_DIRECTIONS,
    payload: direction
  }
}
const deleteDirect = id => {
  return {
    type: DELETE_DIRECTIONS,
    payload: id
  }
}

export function useDirections() {
  const dispatch = useDispatch()
  const directions = useSelector(appState => appState.directionState.directions)
  const create = (direct, i) => dispatch(createDirect(direct, i))
  const remove = id => dispatch(deleteDirect(id))

  useEffect(() => {
    create()
    remove()
  }, [dispatch])

  return { directions, create, remove }
}

// return dispatch => {
//     Axios.post("directions", { step: direct }).then(resp => {
//       dispatch({
//         type: CREATE_DIRECTIONS,
//         payload: resp.data
//       })
//       dispatch(showDirect(resp.data))
//     })
//   }
// function showDirect() {
//   return dispatch => {
//     Axios.get("/directions").then(resp => {
//       dispatch({
//         type: SHOW_DIRECTIONS,
//         payload: resp.data
//       })
//     })
//   }
// }
// function deleteDirect() {
//   return dispatch => {
//     Axios.delete("/directions").then(resp => {
//       dispatch(showDirect(resp.data))
//     })
//   }
// }
