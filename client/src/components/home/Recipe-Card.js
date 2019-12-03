import React from "react"
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
            />
            <p className="recipe-card-rating">{rating}</p>
          </div>
          <div className="recipe-card-right-side">
            <h4 className="recipe-card-recipe-title">{title}</h4>
            <p className="recipe-card-recipe-owner">by {owner}</p>
          </div>
        </div>
        <div className="recipe-card-bottom">
          <p className="recipe-card-description">{description}</p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="recipe-card-view-more"
          >
            View More -->
          </a>
        </div>
      </main>
    </div>
  )
}

export default RecipeCard
