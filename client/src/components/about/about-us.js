import React from "react"
import EmailForm from "./email-form"

const About = props => {
  return (
    <div className="about-us-main-container">
      <div className="about-us-page-container">
        <div className="about-us-page-title">
          <h1>About Order Up</h1>
        </div>
        <div className="about-us-page-subtitle">
          <p className="about-us-subtitle">Our story</p>

          <div className="about-us-page-content">
            <p>
              There is no denying that food, in the right setting and atmosphere
              can be a wonderful experience and opportunity to grow closer with
              those around you.
            </p>
            <p>
              The story of Order Up is a classic example of 3 friends with
              passion of discovering new and excited dishes to try out.
            </p>
            <p>
              We started this site in order to bring people together through the
              experience and warmth of family recipes.
            </p>
            <p>
              We noticed that in our own families, at holiday gatherings, social
              events and just good old fashioned sunday dinner, that food and
              tradition often come paired together.
            </p>
            <p>
              We took this idea and made somthing where people of all different
              cultures and backgrounds could come and share that same tradition
              with others.
            </p>
            <p>
              We feel that through being able to share with each other, that
              people can become more familiar with other parts of the world and
              maybe even their own backyard.
            </p>
          </div>
        </div>
        <div className="about-us-page-subtitle">
          <p className="about-us-subtitle">The Future</p>
          <div className="about-us-page-content">
            <p>
              As we continue to grow this site, we strive to connect our users
              with other cultures across the world.
            </p>
            <p>
              Our goal is to branch out and to make this site available to
              several different countries and discover dishes that people would
              not have access to otherwise.
            </p>
          </div>
        </div>
        <div className="about-us-page-subtitle">
          <p className="about-us-subtitle">Contact&nbsp;us</p>
          <div className="about-us-page-content-email">
            <EmailForm />
            <img
              src="https://images.pexels.com/photos/2562555/pexels-photo-2562555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="about-us-images"
              id="seeds-image"
            />
            <img
              src="https://images.pexels.com/photos/1070896/pexels-photo-1070896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="about-us-images"
              id="cake-image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default About
