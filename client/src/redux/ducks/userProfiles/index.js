import { useSelector, useDispatch, useEffect } from "react"
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
      return { ...state, users: action.payload }
    case USER_PROFILE:
      return { ...state, users: action.payload }
    default:
      return state
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
    console.log(URL, username)
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
function getProfile() {
  return dispatch => {
    axios.get("/edit-profile").then(resp => {
      console.log(resp.data)
      dispatch({
        type: USER_PROFILE,
        payload: resp.data
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
