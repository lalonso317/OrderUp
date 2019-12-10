import React from "react"
import { Link } from "react-router-dom"
import Burrito from "../../Assets/Burrito.jpeg"
import { Redirect } from "react-router-dom"
import { useAuth } from "../../hooks"

const UserProfileMain = props => {
  const { isAuthenticated } = useAuth()
  const username = props.match.params.username

  return isAuthenticated ? (
    <div className="profile-page-container">
      <div className="MakeUpUserName">
        <p>{username}</p>
      </div>
      <br />
      <div className="userProfileMakeUp">
        <div className="MakeUpPic">
          <img src={Burrito} width="500" alt="burrito" />
        </div>
        <div className="MakeUpUserAbout">
          <label htmlFor="about"> About Me</label>
        </div>
        <div className="editProfileButton">
          <button>
            <Link to={"/edit-profile/" + username}>Edit Profile</Link>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to="/" />
  )
}

export default UserProfileMain
