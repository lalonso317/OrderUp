import React from "react"
import Burrito from "../../Assets/Burrito.jpeg"

const UserProfileMain = props => {
  return (
    <div className="profile-page-container">
      <div className="profile-page-to-home-button"></div>
      {/* <div>User Profile, Baby!</div> */}
      <br />
      <div className="userProfileMakeUp">
        <div className="MakeUpPic">
          <img src={Burrito} width="500" alt="burrito" />
        </div>
        <div className="MakeUpUserName">
          <p>Guy</p>
        </div>
        <div className="MakeUpUserEmail">User Email</div>
        <div className="MakeUpUserAbout">User About Me</div>
      </div>
    </div>
  )
}

export default UserProfileMain
