import React from "react"
import RecipeGrid from "./Recipe-Grid"

import "../../styles/home/PublicHomePage.css"
import burrito from "../../Assets/Burrito.jpeg"
import fish from "../../Assets/Fish.jpeg"
import chickenSalad from "../../Assets/Chicken-Salad.jpeg"
import pancakes from "../../Assets/Pancakes.jpeg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import { Link } from "react-router-dom"

const PublicHomePage = props => {
  return (
    <div className="public-home-page-container">
      <Carousel className="imageCarousel" width="100%" infiniteLoop={true}>
        <div className="imageOfCarousel">
          <img src={burrito} alt="burrito" />
          <p className="legend">Burrito</p>
        </div>
        <div className="imageOfCarousel">
          <img src={fish} alt="fish" />
          <p className="legend">Fish</p>
        </div>
        <div className="imageOfCarousel">
          <img src={chickenSalad} alt="chicken salad" />
          <p className="legend">Chicken Salad</p>
        </div>
        <div className="imageOfCarousel">
          <img src={pancakes} alt="pancakes" />
          <p className="legend">Pancakes</p>
        </div>
      </Carousel>
      <RecipeGrid />
      <Link
        to="/all-recipes"
        className="public-home-page-button-to-all-recipes"
      >
        <button>View All Recipes</button>
      </Link>
      <div className="public-home-page-slider"></div>
    </div>
  )
}

export default PublicHomePage
