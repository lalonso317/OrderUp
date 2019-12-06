import React from "react"
import Burrito from "../../Assets/Burrito.jpeg"
import { Link } from "react-router-dom"
import Header from "../home/Header"
const UserProfileMain = props => {
  
  return (
    <div className="profile-page-container">
       <Header
        link_twitter="https://twitter.com/?lang=en"
        link_facebook="https://www.facebook.com/"
        link_reddit="https://www.reddit.com/"
        link_instagram="https://www.instagram.com/"
      />
      <div className="profile-page-to-home-button">
      </div>
      {/* <div>User Profile, Baby!</div> */}
      <br />
      <div className="userProfileMakeUp">
        <div className="MakeUpPic">
          <img src={Burrito} width="500" alt="burrito"/>
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
