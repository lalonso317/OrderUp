import React from "react"
import "../../styles/home/Recipe-Grid.css"
import Card from "../Card"
import { useAllRecipes } from "../../hooks"
import OrderUp from "../../Assets/orderUpfavs.png"

const RecipeGrid = props => {
  const all_recipes = useAllRecipes()

  return (
      <div className="recipe-grid-flex">
        <aside>
          <div>
            <img className="order-up-banner" src={OrderUp} alt=""/>
          </div>
        </aside>
        <div className="recipe-grid-container">
          {all_recipes.slice(0, 6).map((recipe, i) => (

            <Card
              key={recipe.recipeTitle + " " + i + " " + recipe.recipe_id}
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
    </div>
  )
}

export default RecipeGrid
