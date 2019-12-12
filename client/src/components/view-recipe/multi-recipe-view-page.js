import React from "react"
import "../../styles/recipe/multi-recipe-view-page.css"
import Card from "../Card"


const MultiRecipeViewPage = props => {
  console.log("props and shit", props)
  return (
    <div className="multi-recipe-view-page-container">
      <main className="multi-recipe-view-page-wrapper">
        <h1 className="multi-recipe-view-page-title">Recipes</h1>
        <hr />
        <div className="card-columns card-column-lg">
          {props.recipeArray.map((recipe, i) => (
            <Card
              key={`card-${i}-${recipe.recipe_id}`}
              className={`card p-${i} `}
              recipe_link={`/recipe/${recipe.recipe_id}`}
              image_source={recipe.RecipeImages[0].url}
              recipe_rating="3.54/5"
              username={recipe.owner ? recipe.owner : "Anonymous"}
              recipe_title={recipe.recipeTitle}
              recipe_description={recipe.recipeDescription}
              recipe_category={recipe.recipeCategory}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default MultiRecipeViewPage
