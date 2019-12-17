import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Axios from "axios"

const MAKE_SEARCH = "search/MAKE_SEARCH"
const GET_RESULTS = "search/GET_RESULTS"

const intialState = {
  search: []
}

export default (state = intialState, action) => {
  switch (action.type) {
    case MAKE_SEARCH:
      return { ...state, search: action.payload }
    default:
      return state
  }
}

const makeSearch = searchs => {
  return dispatch => {
    Axios.get("/search", { searchs }).then(resp => {
      dispatch({
        type: MAKE_SEARCH,
        payload: resp.data
      })
    })
  }
}

export const useSearch = () => {
  const dispatch = useDispatch()
  const search = useSelector(appState => appState.searchState.search)
  const make = searchs => dispatch(makeSearch(searchs))

  return { make, search }
}
