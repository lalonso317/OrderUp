import React from "react"
import Burrito from "../../Assets/Burrito.jpeg"
import { Link } from "react-router-dom"
import { useUsers } from "../../hooks"
const UserProfileMain = props => {
  const { user } = useUsers()
  return (
    <div className="profile-page-container">
      <div className="profile-page-to-home-button">
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </div>
      <div>User Profile, Baby!</div>
      <div className="userProfileMakeUp">
        <div className="MakeUpPic">
          <img src={Burrito} width="500" />
        </div>
        <div className="MakeUpUserName">
          {user.map(name => {
            return <p>{name.user}</p>
          })}
        </div>
        <div className="MakeUpUserEmail">User Email</div>
        <div className="MakeUpUserAbout">User About Me</div>
      </div>
    </div>
  )
}

export default UserProfileMain
