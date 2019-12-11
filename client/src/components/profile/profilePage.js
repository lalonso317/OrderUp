import React, { useState } from "react"
import { Link } from "react-router-dom"
import Icon from "../../lib/Icon"
import { Redirect } from "react-router-dom"
import { useAuth, useUsers, useAllRecipes } from "../../hooks"
import Meal from "../../Assets/icons8-meal-50.png"

const UserProfileMain = props => {
  const default_image =
    "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_960_720.jpg"
  const { isAuthenticated, usernameEA } = useAuth()
  const all_recipes = useAllRecipes()
  const { users } = useUsers()
  const username = props.match.params.username
  const user = users.find(user => user.username === username)
  const userRecipes = all_recipes.filter(user => user.owner === username)
  const image = user == null ? "" : user.RecipeImages
  const fname = user == null ? "" : user.firstName
  const lname = user == null ? "" : user.lastName
  const about = user == null ? "" : user.about
  const tagline = user == null ? "" : user.tagline


  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  const user = users.find(user => user.username == username)
  const userRecipes = all_recipes.filter(user => user.owner == username)

  const image = user == null ? "" : user.RecipeImages
  const fname = user == null ? "" : user.firstName

  const lname = user == null ? "" : user.lastName

  const about = user == null ? "" : user.about
  const tagline = user == null ? "" : user.tagline
  console.log(user)


  return isAuthenticated ? (
    <div className="profile-page-container">
      <div className="userProfileMakeUp">
        <div className="userProfileHeader">
          <div className="MakeUpUserName">
            <p className="MakeUpUsername">{username}</p>
            <img className="MakeUpMeal" src={Meal} />
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
          <button onClick={handleToggle}>View Private Recipes</button>
          <div
            className={toggle ? "view-all-recipes" : "dont-show-all-recipes"}
          >
            {userRecipes.map((e, i) => (
              <Link to={`/recipe/${e.recipe_id}`} key={i}>
                <div>
                  <p className="view-all-recipe-title">{e.recipeTitle}</p>
                  <img
                    className="view-all-recipe-image"
                    src={e.RecipeImages.map(e => e.url)}
                  />
                </div>
              </Link>
            ))}
          </div>
          <div className="editProfileButton">
            {usernameEA == userRecipes.owner ? (
              ""
            ) : (
              <button>
                <Link to={"/edit-profile/" + username}>Edit Profile</Link>
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
