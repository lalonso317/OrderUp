import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const NEW_COMMENT = "comment/NEW_COMMENT"
// const USER_PROFILE = "comment/USER_PROFILE"
// initial state
const initialState = {
  comments: []
}
// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_COMMENT:
      return { ...state, comments: [...state.comments, action.payload] }
    // case USER_PROFILE:
    //   return { ...state, users: action.payload }
    default:
      return state
  }
}

const newComment = (comment, id) => {
  return dispatch => {
    axios.post("/api/addedComment", { comment, id }).then(resp => {
      dispatch({
        type: NEW_COMMENT,
        payload: comment
      })
    })
  }
}

export const useComments = () => {
  const dispatch = useDispatch()

  const addComment = (comment, id) => dispatch(newComment(comment, id))
  const comments = useSelector(appState => appState.commentState.comments)

  return { comments, addComment }
}
