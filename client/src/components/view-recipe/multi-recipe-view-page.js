import React from "react"
import "../../styles/recipe/multi-recipe-view-page.css"
import Card from "../Card"
import { Link } from "react-router-dom"

const MultiRecipeViewPage = props => {
  console.log("props and shit", props)
  return (
    <div className="multi-recipe-view-page-container">
      <main className="multi-recipe-view-page-wrapper">
        <h1 className="multi-recipe-view-page-title">Recipes</h1>
        <hr />
        <div className="card-columns card-column-lg">
          {props.recipeArray.map((recipe, i) => (
            <Link to={`/recipe/${recipe.recipe_id}`}>
              <Card
                key={`card-${i}`}
                className={`card p-${i} `}
                // recipe_link={`/recipe/${recipe.recipe_id}`}
                image_source={recipe.RecipeImages[0].url}
                recipe_rating="3.54/5"
                username={recipe.owner ? recipe.owner : "Anonymous"}
                recipe_title={recipe.recipeHeader.name}
                recipe_description={recipe.recipeHeader.description}
                recipe_category={recipe.recipeHeader.category}
              />
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

export default MultiRecipeViewPage
