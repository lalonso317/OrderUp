import React, { useState } from "react"
import "../../styles/home/Recipe-Grid.css"
import Card from "../Card"
import { useAllRecipes, useFavorites, useAuth } from "../../hooks"
import OrderUp from "../../Assets/orderUpfavs.png"
import Icon from "../../lib/Icon"

const RecipeGrid = props => {
  const all_recipes = useAllRecipes()
  const [favor, setFavor] = useState(all_recipes.recipe_id)
  const { isAuthenticated, usernameEA } = useAuth()
  const { make } = useFavorites()
  const handleClick = e => {
    e.preventDefault()
    make(favor, usernameEA)
  }
  return (
    <div className="recipe-grid-flex">
      <aside>
        <div>
          <img className="order-up-banner" src={OrderUp} alt="" />
        </div>
      </aside>
      <div className="recipe-grid-container">
        {all_recipes.slice(0, 6).map((recipe, i) => (
          <div className="home-page-single-recipe">
            <div className="heart-home-page">
              {isAuthenticated ? (
                <button
                  className="home-heart"
                  onClick={e => handleClick(e)}
                  value={favor}
                >
                  <Icon icon="heart"></Icon>
                </button>
              ) : (
                ""
              )}
            </div>
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
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecipeGrid
