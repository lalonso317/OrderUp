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
  // console.log(fav)
  // const fav_id = fav.forEach(e => e.favorite_id)
  const user = users.find(user => user.username === username)
  // console.log(all_recipes, fav)
  const userRecipes = all_recipes.filter(user => user.owner === username)

  const favRecipe = fav.find(e => e.username == usernameEA)
    ? all_recipes.filter(e => fav.map(e => e.favorite_id).includes(e.recipe_id))
    : ""

  console.log(favRecipe)
  const image = user == null ? "" : user.RecipeImages
  const fname = user == null ? "" : user.firstName
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
      <div className="userProfileMakeUp">
        <div className="userProfileHeader">
          <div className="MakeUpUserName">
            <p className="MakeUpUsername">{username}</p>
            <img className="MakeUpMeal" src={Meal} alt="" />
          </div>
          <div className="MakeUpPic">
            <img
              className="MakeUpImg"
              src={image ? image : default_image}
              alt=""
            />
          </div>
        </div>
        <div className="MakeUpExtras">
          <div className="MakeUpUserName">
            <p>Name</p>
            <p className="MakeUpCaret">
              <Icon icon="caret-right"></Icon>
            </p>
            <p className="aboutusertext">
              {fname} {lname}
            </p>
          </div>
          <div className="MakeUpUserName">
            <p> About Me</p>
            <p className="MakeUpCaret">
              <Icon icon="caret-right"></Icon>
            </p>
            <p className="aboutusertext">{about}</p>
          </div>
          <div className="MakeUpUserName">
            <p>Tagline</p>
            <p className="MakeUpCaret">
              <Icon icon="caret-right"></Icon>
            </p>
            <p className="aboutusertext">{tagline}</p>
          </div>

          <div className="full-favs-privates">
            <div className="favorited">
              <button
                className="toggleButton"
                id={!toggle ? "color" : ""}
                onClick={handleToggleFav}
              >
                Favorited Recipes
              </button>
              <button
                className="toggleButton"
                id={!toggleFav ? "color" : ""}
                onClick={handleToggle}
              >
                {" "}
                All & Private Recipes
              </button>

              <div
                className={
                  toggleFav ? "view-all-recipes" : "dont-show-all-recipes"
                }
              >
                {favRecipe.length == 0 ? (
                  <div>No Recipes Favorited</div>
                ) : (
                  favRecipe.map(e => (
                    <div>
                      <Link to={`/recipe/${e.recipe_id}`}>
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
                      <Link to={`/recipe/${e.recipe_id}`} key={i}>
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

          <div>
            {isAuthenticated && usernameEA == single_recipe.owner ? (
              ""
            ) : (
              <button className="editProfileButton">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  to={"/edit-profile/" + usernameEA}
                >
                  Edit Profile
                </Link>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to={"/profile-page/" + username} />
  )
}
export default UserProfileMain
