import React from "react"
import RecipeGrid from "./Recipe-Grid"
import SiteFeatures from "./site-features"
import "../../styles/home/PublicHomePage.css"
import fish from "../../Assets/Fish.jpeg"
import pancakes from "../../Assets/Pancakes.jpeg"
import finger from "../../Assets/FingerFood.jpg"
import fruit from "../../Assets/fruits.jpg"
import sushi from "../../Assets/sushi.jpg"
import ham from "../../Assets/ham.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Link } from "react-router-dom"
import AwesomeSlider from "react-awesome-slider"
import AwesomeSliderStyles from "react-awesome-slider/src/styles"
import "react-awesome-slider/dist/autoplay"
import withAutoplay from "react-awesome-slider/dist/autoplay"

const PublicHomePage = props => {
  const AutoplaySlider = withAutoplay(AwesomeSlider)

  return (
    <div className="public-home-page-container">
      <AutoplaySlider
        cssModule={AwesomeSliderStyles}
        startup={true}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={5000}
      >
        <div data-src={fruit} />
        <div data-src={ham} />
        <div data-src={fish} />
        <div data-src={sushi} />
        <div data-src={pancakes} />
        <div data-src={finger} />
      </AutoplaySlider>
      <SiteFeatures />
      {/* <div></div> */}
      <RecipeGrid />
      <Link
        to="/all-recipes"
        className="public-home-page-button-to-all-recipes"
      >
        <button>View All Recipes</button>
      </Link>

      {/* <div className="public-home-page-slider"></div> */}
    </div>
  )
}

export default PublicHomePage
