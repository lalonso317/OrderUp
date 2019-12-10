import React from "react"
import "../../styles/recipe/multi-recipe-view-page.css"
import { Link } from "react-router-dom"

const MultiRecipeViewPage = props => {
  return (
    <div className="multi-recipe-view-page-container">
      <main className="multi-recipe-view-page-wrapper">
        <h1 className="multi-recipe-view-page-title">Recipes</h1>
        <hr />
        <div className="multi-recipe-view-page-details">
          {props.recipeArray.map((recipe, i) => (
            <div
              key={`recipe-${recipe.recipeTitle}-${recipe.recipe_id}`}
              className="multi-recipe-view-page-layout-container"
            >
              <div className="multi-recipe-view-page-image-container">
                <img
                  src={recipe.RecipeImages[0].url}
                  alt="food"
                  width="200px"
                  height="200px"
                  className="multi-recipe-view-page-image"
                />
              </div>
              <div className="multi-recipe-view-page-title-container">
                <Link to={`/recipe/${recipe.recipe_id}`}>
                  <div className="multi-recipe-view-page-titles">
                    {recipe.recipeTitle}
                  </div>
                </Link>
                <dl className="multi-recipe-view-page-details">
                  <dt className="multi-recipe-view-page-category-title">
                    <h4>Category -</h4>
                  </dt>
                  <dd className="multi-recipe-view-page-category underline">
                    {recipe.recipeCategory}
                  </dd>
                  <dt className="multi-recipe-view-page-description-title">
                    <h4>Description -</h4>
                  </dt>
                  <dd className="multi-recipe-view-page-description underline">
                    {recipe.recipeDescription}
                  </dd>
                  <dt className="multi-recipe-view-page-owner-title">
                    <h4>By -</h4>
                  </dt>
                  <dd className="multi-recipe-view-page-owner underline">
                    {recipe.owner}
                  </dd>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export default MultiRecipeViewPage
