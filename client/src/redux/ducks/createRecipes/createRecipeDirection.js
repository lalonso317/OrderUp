import  { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"


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
        directions: [...state.directions, action.payload]
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

  // useEffect(() => {
  //   create()
  //   remove()
  // }, [dispatch])

  useEffect(() => {
    dispatch(createDirect())
    dispatch(deleteDirect())
  }, [dispatch])

  return { directions, create, remove }
}

