import React, { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "../../lib/Icon"
import { Redirect } from "react-router-dom"
import {
  useAuth,
  useUsers,
  useAllRecipes,
  useSingleRecipe,
  useFavorites
} from "../../hooks"
import Meal from "../../Assets/icons8-meal-50.png"

const UserProfileMain = props => {
  const default_image =
    "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_960_720.jpg"
  const { isAuthenticated, usernameEA } = useAuth()
  const all_recipes = useAllRecipes()
  const { single_recipe } = useSingleRecipe()
  const { users } = useUsers()
  const { fav } = useFavorites()

  const username = props.match.params.username

  // const fav_id = fav.forEach(e => e.favorite_id)
  const user = users.find(user => user.username === username.toString())

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

  return isAuthenticated ? (
    <div className="profile-page-container">
      <div
        className="card"
        style={{ maxwidth: "100vw", background: "#000", maxheight: "100vh" }}
      >
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              className="card-img"
              src={image ? image : default_image}
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body MakeUpExtras">
              <h5 className="card-title MakeUpUserName">
                {" "}
                <p className="card-text">Name</p>
                <p className="card-text MakeUpCaret">
                  <Icon icon="caret-right"></Icon>
                </p>
                <p className="card-text aboutusertext">
                  {fname} {lname}
                </p>
              </h5>
              <h5 className="card-title MakeUpUserName">
                <p className="card-text">About Me</p>
                <p className="card-text MakeUpCaret">
                  <Icon icon="caret-right"></Icon>
                </p>
                <p className="card-text aboutusertext">{about}</p>
              </h5>
              <h5 className="card-title MakeUpUserName">
                <p className="card-text">Tagline</p>
                <p className="card-text MakeUpCaret">
                  <Icon icon="caret-right"></Icon>
                </p>
                <p className="card-text aboutusertext">{tagline}</p>
              </h5>
              <p className="full-favs-privates card-text">
                <div className="favorited">
                  <button
                    className="toggleButton"
                    id={!toggleFav ? "color" : ""}
                    onClick={handleToggleFav}
                  >
                    Favorited Recipes
                  </button>
                  <button
                    className="toggleButton"
                    id={!toggle ? "color" : ""}
                    onClick={handleToggle}
                  >
                    All Your Recipes
                  </button>
                  {isAuthenticated && usernameEA === single_recipe.owner ? (
                    ""
                  ) : (
                    <Link to={`/edit-profile/${usernameEA}`}>
                      <button className="toggleButton">Edit Profile</button>
                    </Link>
                  )}
                </div>
              </p>
              <div
                className={
                  toggleFav ? "view-all-recipes" : "dont-show-all-recipes"
                }
              >
                {favRecipe.length === 0 ? (
                  <div>No Recipes Favorited</div>
                ) : (
                  favRecipe.map(e => (
                    <div className="view-all-recipe-mini-card">
                      <Link
                        to={`/recipe/${e.recipe_id}`}
                        className="view-all-recipe-links"
                        style={{ textDecoration: "none" }}
                      >
                        <p className="view-all-recipe-title">{e.recipeTitle}</p>
                        <img
                          className="view-all-recipe-image"
                          alt=""
                          src={e.RecipeImages.map(e => e.url)}
                        />
                      </Link>
                    </div>
                  ))
                )}
              </div>
              <div className="private">
                <div
                  className={
                    toggle
                      ? "view-all-recipes-private "
                      : "dont-show-all-recipes-private "
                  }
                >
                  {userRecipes.length === 0 ? (
                    <div>No Recipes Created</div>
                  ) : (
                    userRecipes.map((e, i) => (
                      <Link
                        to={`/recipe/${e.recipe_id}`}
                        key={i}
                        style={{ textDecoration: "none" }}
                      >
                        <div>
                          <p className="view-all-recipe-title">
                            {e.recipeTitle}
                          </p>
                          <img
                            className="view-all-recipe-image"
                            src={e.RecipeImages.map(e => e.url)}
                            alt=""
                          />
                        </div>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to={"/profile-page/" + username} />
  )
}
export default UserProfileMain
