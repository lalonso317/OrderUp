import React from "react"
import { Link } from "react-router-dom"
import "../../styles/home/Recipe-Card.css"

const RecipeCard = props => {
  const {
    recipe_link: link,
    image_source: image,
    recipe_rating: rating,
    recipe_title: title,
    username: owner,
    recipe_description: description
  } = props

  return (
    <div className="recipe-card-container">
      <main className="recipe-card-wrapper">
        <div className="recipe-card-top">
          <div className="recipe-card-left-side">
            <img
              src={image}
              alt="placeholder"
              className="recipe-card-thumbnail"
              width="80px"
              height="80px"
            />
            <h4 className="recipe-card-recipe-title">{title}</h4>
            {/* <p className="recipe-card-rating">{rating}</p> */}
          </div>
          {/* <div className="recipe-card-right-side">
     
            <p className="recipe-card-recipe-owner">by {owner}</p>
          </div>
        </div>
        <div className="recipe-card-bottom">
          <p className="recipe-card-description">{description}</p> */}
          <Link style={{ textDecoration: "none", color: "black" }} to={link}>
            Details
          </Link>
        </div>
      </main>
    </div>
  )
}

export default RecipeCard
