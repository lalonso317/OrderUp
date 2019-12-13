import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSingleRecipe, useAuth } from "../../hooks"
import CommentComponent from "../comments/comment-component"
import goodFood from "../../Assets/goodfood.png"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share"
import Rating from "react-rating"
import EmptyStar from "../../Assets/empty-star.png"
import FullStar from "../../Assets/full-star.png"
const ViewRecipeSingle = props => {
  const { single_recipe, default_image, SpecificComments } = useSingleRecipe(
    props.match.params.id
  )
  console.log(single_recipe)
  const { usernameEA, isAuthenticated } = useAuth()
  const id = props.match.params.id
  const [rating_value, setRating_value] = useState(0)
  let url = single_recipe.RecipeImages && single_recipe.RecipeImages[0].url
  console.log(
    "single recipe comment ====----====>>>>",
    single_recipe.comments ? single_recipe.comments[0] : ""
  )
  return (
    <div className="single-recipe-view-container">
      <div className="single-recipe-view-main">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={"/all-recipes"}
          className="single-recipe-view-back-button"
        >
          <button>Back to Recipes</button>
        </Link>
        <div className="single-recipe-block">
          <div className="single-border-block">
            <div className="single-recipe-names">
              <p className="single-recipe-title">{single_recipe.recipeTitle}</p>
              &nbsp; &nbsp;
              <p className="single-recipe-creator">
                By:{" "}
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/profile-page/" + single_recipe.owner}
                >
                  {single_recipe.owner}
                </Link>
              </p>
            </div>
            <div className="social-share-buttons">
              <div className="single-facebook">
                <FacebookShareButton
                  // href={"http://localhost:3000/"}
                  url={"https://finediningsite.surge.sh/"}
                  children={<FacebookIcon size={30} round={true} />}
                />
              </div>
              <div className="single-twitter">
                <TwitterShareButton
                  url={`http://localhost:3000/${id}`}
                  children={<TwitterIcon size={30} round={true} />}
                />
              </div>
            </div>
            <div className="ratings">
              <h2>rating</h2>
              <Rating
                onHover={value => value}
                onChange={value => setRating_value(value)}
                emptySymbol={<img src={EmptyStar} width="30px" alt="" />}
                fullSymbol={<img src={FullStar} width="30px" alt="" />}
                start={0}
                stop={5}
                step={1}
                initialRating={rating_value}
                direction="ltr"
              />
              <h2 className="rating-display-numbers">{`${rating_value}/5`}</h2>
            </div>
            <div className="single-recipe-image-container">
              <img
                src={
                  single_recipe.RecipeImages &&
                  single_recipe.RecipeImages[0].url
                }
                alt=""
                className={
                  url === default_image
                    ? "single-recipe-default-image"
                    : "single-recipe-image"
                }
              />
            </div>
            <div className="single-Ing-Dir">
              <div className="single-recipe-ingredients">
                <p className="single-dirNing">Ingredients</p>
                {single_recipe.ingredients &&
                  single_recipe.ingredients.map((ing, i = 1) => (
                    <div
                      className="single-recipe-directions-list"
                      key={`ingredient-${i++}`}
                    >
                      {i++}. {ing.ingredientName}
                    </div>
                  ))}
              </div>
              <div className="single-recipe-directions">
                <p className="single-dirNing">Directions</p>
                {single_recipe.directions &&
                  single_recipe.directions.map((direction, i = 1) => (
                    <div
                      className="single-recipe-directions-list"
                      key={`direction-${i++}`}
                    >
                      {i++}. {direction.step}
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <CommentComponent id={id} />
          {isAuthenticated && usernameEA === single_recipe.owner ? (
            <div>
              <Link
                to={`/edit-recipe/${id}`}
                className="header-component-create-recipe-button"
              >
                <button className="edit-recipe-button">Edit Recipe</button>
              </Link>
              <Link
                to={`/editing-recipe-page/${id}`}
                className="header-component-create-recipe-button"
              >
                <button className="edit-recipe-button">
                  Editing Recipe page
                </button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <img className="goodfood" src={goodFood} />
      </div>
    </div>
  )
}

export default ViewRecipeSingle

// !single_recipe.RecipeImages === null ? single_recipe.RecipeImages && single_recipe.RecipeImages[0].url : Burrito
