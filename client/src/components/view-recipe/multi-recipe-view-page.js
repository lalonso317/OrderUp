import React, { useState } from "react"
import "../../styles/recipe/multi-recipe-view-page.css"
import Card from "../Card"
import CategoryFilter from "./category-filter"
import {
  useFavorites,
  useAuth,
  useSingleRecipe,
  useFilteredCategoryRecipes
} from "../../hooks"
import Icon from "../../lib/Icon"

const MultiRecipeViewPage = props => {
  const { categoryRecipes } = useFilteredCategoryRecipes()
  const FilteredRecipes = categoryRecipes.filter(e => e.private === false)
  // variables used for pagination ------------------
  const pageNumbers = []
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = FilteredRecipes.slice(indexOfFirstPost, indexOfLastPost)
  for (let i = 1; i <= Math.ceil(FilteredRecipes.length / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const handlePageChange = (e, value) => {
    e.preventDefault()
    setCurrentPage(value)
  }

  // ------------------------
  const { isAuthenticated, usernameEA } = useAuth()
  const { make } = useFavorites()

  const handleClick = (e, value) => {
    e.preventDefault()
    make(value, usernameEA)
  }

  return (
    <div className="multi-recipe-view-page-container">
      <main className="multi-recipe-view-page-wrapper">
        <h1 className="multi-recipe-view-page-title">Recipes</h1>
        <CategoryFilter />
        <hr />
        <div className="multi-view-grid">
          {currentPosts.map((recipe, i) => (
            <div
              id="single-card"
              key={`favorite-${recipe}-${i}-${recipe.recipe_id}`}
            >
              {/* <div className="heart-home-page">
                {isAuthenticated ? (
                  <button
                    onClick={e => handleClick(e, recipe.recipe_id)}
                    className="home-heart"
                    type="submit"
                  >
                    <Icon icon="heart" zIndex="-10"></Icon>
                  </button>
                ) : (
                  ""
                )}
              </div> */}
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
                recipe_id={recipe.recipe_id}
              />
            </div>
          ))}
        </div>
        <div className="paginationContainer">
          {pageNumbers.map((number, i) => (
            // <div className="pageNumbers" key={number + "page"}>
            //   <a onClick={e => handlePageChange(e, number)} href="#">
            //     {" "}
            //     {number}
            //   </a>
            // </div>
            <button
              key={`page-number-${i}`}
              className="pageNumbers"
              onClick={e => handlePageChange(e, number)}
            >
              {number}
            </button>
          ))}
        </div>
        <br />
      </main>
    </div>
  )
}

export default MultiRecipeViewPage
