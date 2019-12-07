import React from "react"
import "../../styles/recipe/multi-recipe-view-page.css"
import { Link } from "react-router-dom"

const MultiRecipeViewPage = props => {
  console.log(props.recipeArray)
  return (
    <div className="multi-recipe-view-page-container">
      <h1 className="multi-recipe-view-page-title">Recipes</h1>
      <hr />
      <div className="multi-recipe-view-page-details">
        {props.recipeArray.map((recipe, i) => (
          <div
            key={`recipe-${recipe.recipeTitle}-${recipe.recipe_id}`}
            className="multi-recipe-view-page-layout-container"
          >
            <div>
              <img
                src={recipe.RecipeImages[0].url}
                alt="food"
                width="300px"
                height="300px"
              />
            </div>
            <div className="multi-recipe-title-container">
              <Link to={`/recipe/${recipe.recipe_id}`}>
                <div className="multi-recipe-view-page-titles">
                  {recipe.recipeTitle}
                </div>
              </Link>
              <div className="multi-recipe-view-page-category-container">
                <div className="multi-recipe-view-page-category-label">
                  Category&ensp;-
                  <span>{recipe.recipeCategory}</span>
                </div>
              </div>
              <div className="multi-recipe-view-page-description-container">
                <div className="m-r-v-p-d-label">Description</div>
                <div className="m-r-v-p-description">
                  &emsp;{recipe.recipeDescription}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MultiRecipeViewPage
