import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

// action definitions
const UPDATE_USERS = "users/UPDATE_USER"
const USER_PROFILE = "users/USER_PROFILE"
// initial state
const initialState = {
  users: []
}
// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USERS:
      return state
    case USER_PROFILE:
      return { ...state, users: action.payload }
    default:
      return state
  }
}
function getProfile() {
  return dispatch => {
    axios.get("/edit-profile").then(resp => {
      dispatch({
        type: USER_PROFILE,
        payload: resp.data
      })
    })
  }
}
function editProfile(
  email,
  firstName,
  lastName,
  tagline,
  about,
  username,
  URL
) {
  return dispatch => {
    axios
      .post("/edit-profile", {
        email,
        firstName,
        lastName,
        tagline,
        about,
        username,
        URL
      })
      .then(resp => {
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
  const update = (username, fname, lname, email, tagline, about, URL) =>
    dispatch(editProfile(username, fname, lname, email, tagline, about, URL))
  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])
  return { users, update }
}
