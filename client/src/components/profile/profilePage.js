import React from "react"
import { Link } from "react-router-dom"
import Burrito from "../../Assets/Burrito.jpeg"
import { Redirect } from "react-router-dom"
import {
  usePosty,
  useAuth,
  useUsers,
  useFullRecipe,
  useAllRecipes,
  useSingleRecipe
} from "../../hooks"

const UserProfileMain = props => {
  const { isAuthenticated, usernameEA } = useAuth()
  const all_recipes = useAllRecipes()
  const { users } = useUsers()
  const username = props.match.params.username

  const user = users.find(user => user.username == username)
  const userRecipes = all_recipes.filter(user => user.owner == username)
  console.log(userRecipes)
  return isAuthenticated ? (
    <div className="profile-page-container">
      <div className="userProfileMakeUp">
        <div className="userProfileHeader">
          <div className="MakeUpPic">
            <img
              className="MakeUpImg"
              src={user.RecipeImages == undefined ? "" : user.RecipeImages}
            />
          </div>
          <div className="MakeUpUserName">
            <p>{username}</p>
          </div>
        </div>
        <div className="MakeUpUserName">
          <p>Name </p>
          <p className="aboutusertext">
            {user.firstName === undefined
              ? ""
              : user.firstName + " " + user.lastName}
          </p>
        </div>
        <div className="MakeUpUserName">
          <p> About Me </p>
          <p className="aboutusertext">
            {user.about === undefined ? "" : user.about}
          </p>
        </div>
        <div className="MakeUpUserName">
          <p>Tagline </p>
          <p className="aboutusertext">
            {user.tagline === undefined ? "" : user.tagline}
          </p>
        </div>
        <div>
          {userRecipes.map((e, i) => (
            <Link to={`/recipe/${e.recipe_id}`} key={i}>
              <div>
                <p>{e.recipeTitle}</p>
                <img src={e.RecipeImages.map(e => e.url)} />
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
  ) : (
    <Redirect to={"/profile-page/" + username} />
  )
}

export default UserProfileMain
