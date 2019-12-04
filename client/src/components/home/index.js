import React from "react"
import Header from "./Header"
import RecipeGrid from "./Recipe-Grid"
import "../../styles/home/PublicHomePage.css"
import burrito from "../../assets/Burrito.jpeg"
import fish from "../../assets/Fish.jpeg"
import chickenSalad from "../../assets/Chicken-Salad.jpeg"
import pancakes from "../../assets/Pancakes.jpeg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const PublicHomePage = props => {
  return (
    <div className="public-home-page-container">
      <Header
        link_twitter="https://twitter.com/?lang=en"
        link_facebook="https://www.facebook.com/"
        link_reddit="https://www.reddit.com/"
        link_instagram="https://www.instagram.com/"
      />
      <RecipeGrid />
      <div className="public-home-page-slider">
        <Carousel width="1000px" infiniteLoop="true">
          <div>
            <img src={burrito} alt="burrito" />
            <p className="legend">Burrito</p>
          </div>
          <div>
            <img src={fish} alt="fish" />
            <p className="legend">Fish</p>
          </div>
          <div>
            <img src={chickenSalad} alt="chicken salad" />
            <p className="legend">Chicken Salad</p>
          </div>
          <div>
            <img src={pancakes} alt="pancakes" />
            <p className="legend">Pancakes</p>
          </div>
        </Carousel>
      </div>
    </div>
  )
}

export default PublicHomePage
