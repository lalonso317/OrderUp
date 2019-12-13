import React from "react"
import Mitchell from "../../Assets/profile-mitchell.JPG"
const AboutTheDevs = props => {
  const test =
    "1. 15 pounds charcoal briquets,2 pounds hickory wood chips,1 cup bourbon whiskey,1 (4 pound) standing rib roast, bone in,1/2 cup steak seasoning"
  const testing = test
  return (
    <div className="about-devs-container">
      <div className="about-devs-title">
        <h1>About the Devs</h1>
      </div>
      <div className="">
        <div>
          <h3>Mitchell</h3>
          <img src={Mitchell} width="300px" />
        </div>
        <div className="">
          <h3>Background</h3>
          <p>
            Mitchell is one of our top developers here at Order up. He enjoys
            spending his freetime traveling with his wife to places such as
            Japan, Taiwan, Hong Kong and various cities throughout the United
            States.
          </p>
          <p>
            He has traveled around the United States and several countries in
            Asia such as Japan, Taiwan, Hong Kong.
          </p>
          <p>
            He lived in Japan from 2012 to 2014 as a missionary and again from
            2018 to 2019 as a civilian.
          </p>
          <p>{testing}</p>
          <h3>Current Events</h3>
          <p></p>
          <h3>future</h3>
        </div>
      </div>
      <div className="">
        <div>
          <h3>Mitchell</h3>
          <img src={Mitchell} width="300px" />
        </div>
        <div className="">
          <p>Background</p>
          <p>Current Events</p>
          <p></p>
          <p>future</p>
          <p></p>
          <p></p>
        </div>
      </div>
      <div className="">
        <div>
          <h3>Mitchell</h3>
          <img src={Mitchell} width="300px" />
        </div>
        <div className="">
          <p>Background</p>
          <p>Current Events</p>
          <p></p>
          <p>future</p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default AboutTheDevs
