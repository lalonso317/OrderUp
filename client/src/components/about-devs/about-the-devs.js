import React from "react"
import Mitchell from "../../Assets/profile-mitchell.JPG"
import Alex from "../../Assets/alex-prof.png"
import Luis from "../../Assets/Luis.jpeg"
import "../../styles/about-devs/about-devs.css"
import { AwesomeButtonSocial } from "react-awesome-button"
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss"
const AboutTheDevs = props => {
  const test =
    "1. 15 pounds charcoal briquets,2 pounds hickory wood chips,1 cup bourbon whiskey,1 (4 pound) standing rib roast, bone in,1/2 cup steak seasoning"
  const testing = test

  return (
    <div className="about-devs-container">
      <div className="about-devs-title">
        <h1>About the Devs</h1>
        <br />
      </div>
      <div className="about-devs-profile">
        <div className="about-devs-header">
          <div className="about-devs-header-left">
            <h2>Mitchell</h2>
            <a
              href="https://github.com/Mitchell8210"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Mitchell}
                alt="One of the devs for order up"
                className="img-fluid about-devs-img"
              />
            </a>
            <div className="about-devs-social-icons">
              <AwesomeButtonSocial
                cssModule={AwesomeButtonStyles}
                type="github"
                message="Check this out!"
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Mitchell8210"
              ></AwesomeButtonSocial>
              <AwesomeButtonSocial
                cssModule={AwesomeButtonStyles}
                type="linkedin"
                message="Check this out!"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/mitchell-rhoads-009006195/"
              ></AwesomeButtonSocial>
            </div>
          </div>
          <div className="about-devs-content">
            <h3>Background</h3>
            <p>
              Mitchell is one of our top developers here at Order up. He enjoys
              spending his freetime traveling with his wife to places such as
              Japan, Taiwan, Hong Kong and various cities throughout the United
              States. He has traveled around the United States and several
              countries in Asia such as Japan, Taiwan, Hong Kong. He lived in
              Japan from 2012 to 2014 as a missionary and again from 2018 to
              2019 as a civilian. States.
            </p>

            <br />
          </div>
        </div>
      </div>
      <div className="about-devs-profile">
        <div className="about-devs-header">
          <div className="about-devs-header-left">
            <h2>Alex</h2>
            <a
              href="https://github.com/alexjmitchell"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Alex}
                alt="One of the devs for order up"
                className="img-fluid about-devs-img"
                style={{ height: "227.05px" }}
              />
            </a>
            <div className="about-devs-social-icons">
              <AwesomeButtonSocial
                cssModule={AwesomeButtonStyles}
                type="github"
                message="Check this out!"
                target="blank"
                href="https://github.com/alexjmitchell"
              ></AwesomeButtonSocial>
              <AwesomeButtonSocial
                cssModule={AwesomeButtonStyles}
                type="linkedin"
                message="Check this out!"
                target="blank"
                href="https://www.linkedin.com/in/alex-mitchell-0082a7195/"
              ></AwesomeButtonSocial>
            </div>
          </div>
          <div className="about-devs-content">
            <h3>Background</h3>
            <p>
              Alex is a 25 year old male who is an aspiring developer. At the
              end of 2019, Alex began a new career path by joining a code school
              called Punch Code. Going into the future, after graduating the
              rigorous Punch Code course Alex got hired on at Order Up as a
              junior front end developer. Later becoming a fullstack developer
              for Order Up. As a fullstack developer for Order Up, Alex has
              added alot to the code for Order up.
            </p>
          </div>
        </div>
      </div>
      <div className="about-devs-profile">
        <div className="about-devs-header">
          <div className="about-devs-header-left">
            <h2>Luis</h2>
            <a
              href="https://github.com/lalonso317"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Luis}
                alt="One of the devs for order up"
                className="img-fluid about-devs-img"
              />
            </a>
            <div className="about-devs-social-icons">
              <AwesomeButtonSocial
                cssModule={AwesomeButtonStyles}
                type="github"
                message="Check this out!"
                target="blank"
                href="https://github.com/lalonso317"
              ></AwesomeButtonSocial>
              <AwesomeButtonSocial
                cssModule={AwesomeButtonStyles}
                type="linkedin"
                message="Check this out!"
                target="blank"
                href="https://www.linkedin.com/in/luis-alonso-b62a38194/"
              ></AwesomeButtonSocial>
            </div>
          </div>
          <div className="about-devs-content">
            <h3>Background</h3>
            <p>
              Luis Alonso is a talented individual who has proved he has what it
              takes to be a great Junior Developer. He began as a mechanical
              technology student in highschool, then a film major in college.
              None of those were something he pursued completly. From having no
              prior experience, he has completed this program in order to create
              a career in the tech world. He looks to see where this takes him,
              whether it is becoming a senior developer or running a start up.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTheDevs
