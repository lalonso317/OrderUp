import React from "react"
import "../../styles/recipe/multi-recipe-view-page.css"
import { Link } from 'react-router-dom'

const MultiRecipeViewPage = props => {
  return (
    <div className="multi-recipe-view-page-container">
      <h1 className="multi-recipe-view-page-title">Recipes</h1>
      <hr />
      <dl className="multi-recipe-view-page-details">
        {props.recipeArray.map((recipe, i) => (
          <>
            <dt
              key={`recipe-${recipe.recipeTitle}-${i}`}
              className="multi-recipe-view-page-recipe-name"
            >
              <Link to={`/recipe/${recipe.recipe_id}`}>
                <h3>{recipe.recipeTitle}</h3>
              </Link>
            </dt>
            <dd>Description: {recipe.recipeDescription}</dd>
            <br />
            <dd
              key={`recipe-user-guy-${i}`}
              className="multi-recipe-view-page-recipe-user"
            >
              by: <span className="multi-recipe-view-page-recipe-user-span">guy</span>
            </dd>
          </>
        ))}
      </dl>
    </div>
  )
}

export default MultiRecipeViewPage
