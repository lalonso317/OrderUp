import React, { useState } from "react"
import "../../styles/recipe/multi-recipe-view-page.css"
import Card from "../Card"
import PaginationComponent from "./pagination-component"
import CategoryFilter from "./category-filter"
import { useFavorites, useAuth, useSingleRecipe } from "../../hooks"
import Icon from "../../lib/Icon"

const MultiRecipeViewPage = props => {
  console.log("props and shit", props)
  const [favor, setFavor] = useState("")
  const { isAuthenticated, usernameEA } = useAuth()
  const { make } = useFavorites()

  // for favorite
  // const handleClick = (e, favor) => {
  //   e.preventDefault()

  //   make(favor, usernameEA)
  // }
  const handleFav = (e, value) => {
    e.preventDefault()

    make(value, usernameEA)
    console.log(value, usernameEA)
  }

  return (
    <div className="multi-recipe-view-page-container">
      <main className="multi-recipe-view-page-wrapper">
        <h1 className="multi-recipe-view-page-title">Recipes</h1>
        <CategoryFilter />
        <hr />
        <div className="card-columns card-column-lg">
          {props.recipeArray.map((recipe, i) => (
            <div id="single-card">
              <div className="heart-home-page">
                {isAuthenticated ? (
                  <form onSubmit={(e, value) => handleFav(e, value)}>
                    <button
                      // onClick={(e, value) => handleClick(e, value)}
                      className="home-heart"
                      type="submit"
                      value={recipe.recipe_id}
                    >
                      <Icon icon="heart"></Icon>
                    </button>
                  </form>
                ) : (
                  ""
                )}
              </div>
              <Card
                key={`card-${i}-${recipe.recipe_id}`}
                className={`card p-${i} `}
                recipe_link={`/recipe/${recipe.recipe_id}`}
                image_source={recipe.RecipeImages[0].url}
                recipe_rating={recipe.ratings.map(rating => rating.value)}
                username={recipe.owner ? recipe.owner : "Anonymous"}
                recipe_title={recipe.recipeTitle}
                recipe_description={recipe.recipeDescription}
                recipe_category={recipe.recipeCategory}
              />
            </div>
          ))}
        </div>
        <PaginationComponent />
      </main>
    </div>
  )
}

export default MultiRecipeViewPage
