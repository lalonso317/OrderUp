import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import axios from "axios"

const CREATE_USER = "reg/CREATE_USER"
const ALL_USERS = "reg/ALL_USERS"

const initalState = {
  users: []
}
export default (state = initalState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, users: action.payload }
    case ALL_USERS:
      return { ...state, users: action.payload }
    default:
      return state
  }
}

function postUser(username, email, password, dispatch) {
  return new Promise((resolve, reject) => {
    axios
      .post("/Register", { username, email, password })
      .then(resp => {
        dispatch({
          type: CREATE_USER
        })
        resolve()
      })
      .catch(e => {
        reject()
      })
  })
}

function getUsers() {
  return dispatch => {
    axios.get("/Register").then(resp => {
      // console.log(resp.data)
      dispatch({
        type: ALL_USERS,
        payload: resp.data
      })
    })
  }
}

export function usePosty() {
  const dispatch = useDispatch()
  const user = useSelector(appState => appState.regState.users)
  const allUsers = () => dispatch(getUsers())
  const create = (username, email, password) => {
    return postUser(username, email, password, dispatch)
  }
  useEffect(() => {
    allUsers()
  }, [dispatch])

  return { create, user }
}
