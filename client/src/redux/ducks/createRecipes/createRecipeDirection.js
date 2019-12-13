import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const CREATE_DIRECTIONS = "direct/CREATE_DIRECTIONS"
const DELETE_DIRECTIONS = "direct/DELETE_DIRECTIONS"
const INITAL_DIRECTIONS = "direct/INITAL_DIRECTIONS"

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
    case INITAL_DIRECTIONS:
      return initalState
    default:
      return state
  }
}

const createDirect = direct => {
  const direction = {
    step: direct
  }
  return dispatch => {
    dispatch({
      type: CREATE_DIRECTIONS,
      payload: direction
    })
  }
}

const initalDirect = () => {
  return {
    type: INITAL_DIRECTIONS
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
  const inital = () => dispatch(initalDirect())

  // useEffect(() => {
  //   create()
  //   remove()
  // }, [dispatch])

  useEffect(() => {
    dispatch(createDirect())
    dispatch(deleteDirect())
  }, [dispatch])

  return { directions, create, remove, inital }
}
