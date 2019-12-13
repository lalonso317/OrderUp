import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"

const MAKE_FAVORITE = "fav/MAKE_FAVORITE"
const GET_FAVORITE = "fav/GET_FAVORITE"

const initalState = {
  favs: []
}

export default (state = initalState, action) => {
  switch (action.type) {
    case MAKE_FAVORITE:
      return { ...state, favs: [...state.favs, action.payload] }
    case GET_FAVORITE:
      return { ...state, favs: action.payload }
    default:
      return state
  }
}

const makeFavorite = (favor, usernameEA) => {
  return dispatch => {
    axios.post("/add-favorites", { favor, usernameEA }).then(resp => {
      const data = { favorite_id: favor, username: usernameEA }
      dispatch({
        type: MAKE_FAVORITE,
        payload: data
      })
    })
  }
}
const getFavorite = () => {
  return dispatch => {
    axios.get("/select-favorites").then(resp => {
      dispatch({
        type: GET_FAVORITE,
        payload: resp.data
      })
    })
  }
}

export const useFavorites = () => {
  const dispatch = useDispatch()
  const fav = useSelector(appState => appState.favState.favs)
  const make = (favor, usernameEA) => dispatch(makeFavorite(favor, usernameEA))
  const get = () => dispatch(getFavorite())

  useEffect(() => {
    get()
  }, [dispatch])
  return { make, get, fav }
}
