import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ADD_RATINGS = 'ratings/ADD_RATINGS'


const initialState = {
  ratings: []
}