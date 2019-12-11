import React from "react"
import RecipeGrid from "./Recipe-Grid"
import SiteFeatures from "./site-features"
import "../../styles/home/PublicHomePage.css"
import burrito from "../../Assets/Burrito.jpeg"
import fish from "../../Assets/Fish.jpeg"
import chickenSalad from "../../Assets/Chicken-Salad.jpeg"
import pancakes from "../../Assets/Pancakes.jpeg"
import "react-responsive-carousel/lib/styles/carousel.min.css"
// import { Carousel } from "react-responsive-carousel"
import { Link } from "react-router-dom"
// import Gallery from "react-grid-gallery"
import AwesomeSlider from "react-awesome-slider"
import AwesomeSliderStyles from "react-awesome-slider/src/styles"
import "react-awesome-slider/dist/autoplay"
import withAutoplay from "react-awesome-slider/dist/autoplay"

const PublicHomePage = props => {

  const AutoplaySlider = withAutoplay(AwesomeSlider)

  return (
    <div className="public-home-page-container">
      {/* <Carousel className="imageCarousel" width="100%" infiniteLoop={true}>
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
      </Carousel> */}
      {/* <div
        style={{
          display: "block",
          minHeight: "1px",
          width: "100%",
          border: "1px solid #ddd",
          overflow: "auto"
        }}
      >
        <Gallery images={IMAGES} />
      </div> */}

      <AutoplaySlider
        cssModule={AwesomeSliderStyles}
        startup={true}
        play={true}
        cancelOnInteraction={false} // should stop playing on user interaction
        interval={4000}
      >
        <div data-src={burrito} />
        <div data-src={fish} />
        <div data-src={chickenSalad} />
        <div data-src={pancakes} />
      </AutoplaySlider>
      <SiteFeatures />
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
