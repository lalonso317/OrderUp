import React, { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "../lib/Icon"
import { Redirect } from "react-router-dom"
import {
  useAuth,
  useUsers,
  useAllRecipes,
  useSingleRecipe,
  useFavorites
} from "../hooks"

const ProfileCard = props => {
  const default_image =
    "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_960_720.jpg"
  const { isAuthenticated, usernameEA } = useAuth()
  const all_recipes = useAllRecipes()
  const { single_recipe } = useSingleRecipe()
  const { users } = useUsers()
  const { fav } = useFavorites()

  const username = props.match.params.username
 
  // const fav_id = fav.forEach(e => e.favorite_id)
  const user = users.find(user => user.username === username)
 
  const userRecipes = all_recipes.filter(user => user.owner === username)

  const favRecipe = fav.find(e => e.username == usernameEA)
    ? all_recipes.filter(e => fav.map(e => e.favorite_id).includes(e.recipe_id))
    : ""

  const image = user == null ? "" : user.RecipeImages
  const fname = user === undefined ? "" : user.firstName
  const lname = user == null ? "" : user.lastName
  const about = user == null ? "" : user.about
  const tagline = user == null ? "" : user.tagline

  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
    setToggleFav(false)
  }
  const [toggleFav, setToggleFav] = useState(false)
  const handleToggleFav = () => {
    setToggleFav(!toggleFav)
    setToggle(false)
  }
  return (
    <div className="container">
      <div className="card" style={{ width: "500px", background: "#000" }}>
        <img
          className="card-img-top"
          src={image ? image : default_image}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">
            {" "}
            <p>Name</p>
            <p className="card-text MakeUpCaret">
              <Icon icon="caret-right"></Icon>
            </p>
            <p className="card-text aboutusertext">Test Name</p>
          </h5>
          <p className="card-text">Test</p>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
