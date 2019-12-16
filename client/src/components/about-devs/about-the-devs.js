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
            <h3>Current Events</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              possimus modi nobis suscipit eveniet aliquam id. Ratione minima
              voluptatem dignissimos fugiat odit accusamus, facere quam
              consectetur ea, earum, accusantium quidem magni. Assumenda iste
              blanditiis nobis nam maxime illo vel voluptatum expedita
              voluptatibus, animi cum. Voluptatum vitae quasi nostrum esse
              culpa!
            </p>
            <h3>Future</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              possimus modi nobis suscipit eveniet aliquam id. Ratione minima
              voluptatem dignissimos fugiat odit accusamus, facere quam
              consectetur ea, earum, accusantium quidem magni. Assumenda iste
              blanditiis nobis nam maxime illo vel voluptatum expedita
              voluptatibus, animi cum. Voluptatum vitae quasi nostrum esse
              culpa!
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              possimus modi nobis suscipit eveniet aliquam id. Ratione minima
              voluptatem dignissimos fugiat odit accusamus, facere quam
              consectetur ea, earum, accusantium quidem magni. Assumenda iste
              blanditiis nobis nam maxime illo vel voluptatum expedita
              voluptatibus, animi cum. Voluptatum vitae quasi nostrum esse
              culpa!
            </p>
            <h3>Current Events</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              possimus modi nobis suscipit eveniet aliquam id. Ratione minima
              voluptatem dignissimos fugiat odit accusamus, facere quam
              consectetur ea, earum, accusantium quidem magni. Assumenda iste
              blanditiis nobis nam maxime illo vel voluptatum expedita
              voluptatibus, animi cum. Voluptatum vitae quasi nostrum esse
              culpa!
            </p>
            <h3>Future</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              possimus modi nobis suscipit eveniet aliquam id. Ratione minima
              voluptatem dignissimos fugiat odit accusamus, facere quam
              consectetur ea, earum, accusantium quidem magni. Assumenda iste
              blanditiis nobis nam maxime illo vel voluptatum expedita
              voluptatibus, animi cum. Voluptatum vitae quasi nostrum esse
              culpa!
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              possimus modi nobis suscipit eveniet aliquam id. Ratione minima
              voluptatem dignissimos fugiat odit accusamus, facere quam
              consectetur ea, earum, accusantium quidem magni. Assumenda iste
              blanditiis nobis nam maxime illo vel voluptatum expedita
              voluptatibus, animi cum. Voluptatum vitae quasi nostrum esse
              culpa!
            </p>
            <h3>Current Events</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              possimus modi nobis suscipit eveniet aliquam id. Ratione minima
              voluptatem dignissimos fugiat odit accusamus, facere quam
              consectetur ea, earum, accusantium quidem magni. Assumenda iste
              blanditiis nobis nam maxime illo vel voluptatum expedita
              voluptatibus, animi cum. Voluptatum vitae quasi nostrum esse
              culpa!
            </p>
            <h3>Future</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              possimus modi nobis suscipit eveniet aliquam id. Ratione minima
              voluptatem dignissimos fugiat odit accusamus, facere quam
              consectetur ea, earum, accusantium quidem magni. Assumenda iste
              blanditiis nobis nam maxime illo vel voluptatum expedita
              voluptatibus, animi cum. Voluptatum vitae quasi nostrum esse
              culpa!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTheDevs
