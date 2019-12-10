import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const UPDATE_USERS = "users/UPDATE_USER"

// initial state
const initialState = {
  users: []
}

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return { ...state, users: action.payload }
    default:
      return state
  }
}

function editProfile(username, email, firstName, lastName, tagline, about) {
  return dispatch => {
    axios
      .post("/edit-profile", {
        username,
        email,
        firstName,
        lastName,
        tagline,
        about
      })
      .then(resp => {
        console.log(resp.data)
        dispatch({
          type: UPDATE_USERS
        })
      })
  }
}

// custom hooks
export function useUsers() {
  const users = useSelector(appState => appState.userState.users)
  const dispatch = useDispatch()
  const update = (username, fname, lname, email, tagline, about) =>
    dispatch(editProfile(username, fname, lname, email, tagline, about))

  return { users, update }
}
