import React, { useState } from "react"
import { Link } from "react-router-dom"
import Burrito from "../../Assets/Burrito.jpeg"
import { Redirect } from "react-router-dom"
import { usePosty, useAuth, useUsers, useFullRecipe } from "../../hooks"

const UserProfileMain = props => {
  const { isAuthenticated } = useAuth()
  // const { RecipeImages } = useFullRecipe()
  const { users } = useUsers()
  const username = props.match.params.username

  // const allUsers = user.map(item => item.results.username)

  const user = users.find(user => (user.username = username))
  console.log(user)

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
            {user.firstName == undefined
              ? ""
              : user.firstName + " " + user.lastName}
          </p>
        </div>
        <div className="MakeUpUserName">
          <p> About Me </p>
          <p className="aboutusertext">
            {user.about == undefined ? "" : user.about}
          </p>
        </div>
        <div className="MakeUpUserName">
          <p>Tagline </p>
          <p className="aboutusertext">
            {user.tagline == undefined ? "" : user.tagline}
          </p>
        </div>

        <div className="editProfileButton">
          <button>
            <Link to={"/edit-profile/" + username}>Edit Profile</Link>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to={"/profile-page/" + username} />
  )
}

export default UserProfileMain
