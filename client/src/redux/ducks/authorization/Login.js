import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import jwt from "jsonwebtoken"
import { ConsoleLogger } from "@aws-amplify/core"

const LOGIN_PENDING = "auth/LOGIN_PENDING"
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS"
const LOGIN_FAILURE = "auth/LOGIN_FAILURE"
const LOGOUT = "auth/LOGIN"

async function checkAuth() {
  const token = window.localStorage.getItem("token")
  const resp = await axios.post("/login", token)
  console.log(token)
  if (resp) {
    return {
      pusername: jwt.decode(token).username,
      isAuthed: true
    }
  } else {
    return {
      pusername: "",
      isAuthed: false
    }
  }
}

const { pusername, isAuthed } = checkAuth()

const initalState = {
  username: pusername,
  isAuthenticated: isAuthed,
  loading: true
}

export default (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_PENDING:
      return { ...state, loading: true }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        username: action.payload
      }
    case LOGIN_FAILURE:
      return { ...state, isAuthenticated: false, loading: false, username: "" }
    case LOGOUT:
      return { ...state, isAuthenticated: false, loading: false, username: "" }
    default:
      return state
  }
}

function login(username, password, dispatch) {
  return new Promise((resolve, reject) => {
    axios
      .post("/Login", { username, password })
      .then(resp => {
        axios.defaults.headers.common = {
          Authorization: `Bearer ${resp.data.token}`
        }

        window.localStorage.setItem("token", resp.data.token)
        dispatch({
          type: LOGIN_SUCCESS,
          payload: username
        })
        resolve()
      })
      .catch(e => {
        dispatch({
          type: LOGIN_FAILURE
        })
        reject()
      })
  })
}
function logout() {
  axios.defaults.headers.common = { Authorization: "" }
  window.localStorage.removeItem("token")
  return { type: LOGOUT }
}

export function useAuth() {
  const dispatch = useDispatch()
  const username = useSelector(appState => appState.authState.username)
  const isAuthenticated = useSelector(
    appState => appState.authState.isAuthenticated
  )

  const signin = (username, password) => {
    dispatch({ type: LOGIN_PENDING })
    return login(username, password, dispatch)
  }

  const signout = () => dispatch(logout())

  return { signin, signout, isAuthenticated, username }
}