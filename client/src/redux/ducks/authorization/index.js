import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const GET_USER = "user/GET_USER"

const initalState = {
  users: []
}

export default (state = initalState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, users: [...state.users, action.payload] }
    default:
      return state
  }
}

const showUser = username => {
  const us = {
    user: username
  }
  console.log(us)
  return {
    type: GET_USER,
    payload: us
  }
}

export const useUsers = () => {
  const dispatch = useDispatch()
  const user = useSelector(appState => appState.userState.users)
  const create = username => dispatch(showUser(username))

  useEffect(() => {
    create()
  }, [dispatch])

  return { user, create }
}
