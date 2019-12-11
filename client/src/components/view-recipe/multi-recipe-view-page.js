import React from "react"
import "../../styles/recipe/multi-recipe-view-page.css"
import Card from "../Card"
import { Link } from "react-router-dom"
import { container } from "@aws-amplify/ui"

const MultiRecipeViewPage = props => {
  return (
    <div className="multi-container">
      <div className="multi-recipe-view-page-container">
        <main className="multi-recipe-view-page-wrapper">
          <h1 className="multi-recipe-view-page-title">Recipes</h1>
          <hr />
          <div className="card-columns card-column-lg">
            {console.log(props.recipeArray)}
            {props.recipeArray.map((recipe, i) => (
              <div className="mulit-single-card-main">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  className="multi-link-container"
                  to={`/recipe/${recipe.recipe_id}`}
                >
                  <img
                    id="multi-card-top"
                    className="multi-card-img-top"
                    src={recipe.RecipeImages[0].url}
                    alt=""
                    width="325px"
                    height="325px"
                  />
                </Link>
                <div id="multi-recipe-single" className="card text-center">
                  <div className="multi-card-header">
                    <h4 className="multi-card-title">{recipe.recipeTitle}</h4>
                    <h6 className="multi-card-subtitle">By - {recipe.owner}</h6>
                  </div>
                  <div id="card-body">
                    <div className="row">
                      <div className="col-7">
                        <h6 className="mulit-card-subtitle">
                          Category - {recipe.recipeCategory}
                        </h6>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col">
                        <p className="mulit-card-text">
                          {recipe.recipeDescription}
                        </p>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col">
                        <Link to={""} className="btn btn-outline-warning">
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

export default MultiRecipeViewPage
