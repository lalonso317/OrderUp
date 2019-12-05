import React from "react"
import Header from "../home/Header"
import "../../styles/recipe/multi-recipe-view-page.css"

const MultiRecipeViewPage = props => {
  return (
    <div className="multi-recipe-view-page-container">
      <Header
        link_twitter="https://twitter.com/?lang=en"
        link_facebook="https://www.facebook.com/"
        link_reddit="https://www.reddit.com/"
        link_instagram="https://www.instagram.com/"
      />
      <h1 className="multi-recipe-view-page-title">Recipes</h1>
      <hr />
      <dl className="multi-recipe-view-page-details">
        {props.recipeArray.map((recipe, i) => (
          <>
            <dt
              key={`recipe-${recipe.name}-${i}`}
              className="multi-recipe-view-page-recipe-name"
            >
              <h3>{recipe.name}</h3>
            </dt>
            <dd
              key={`recipe-user-${recipe.user}-${i}`}
              className="multi-recipe-view-page-recipe-user"
            >
              by: <span className="multi-recipe-view-page-recipe-user-span">{recipe.user}</span>
            </dd>
          </>
        ))}
      </dl>
    </div>
  )
}

export default MultiRecipeViewPage
