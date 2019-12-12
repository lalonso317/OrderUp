import React from "react"
import { Link } from "react-router-dom"
import { useSingleRecipe } from "../../hooks"
import CommentComponent from "../comments/comment-component"
import goodFood from "../../Assets/goodfood.png"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share"
const ViewRecipeSingle = props => {
  const { single_recipe, default_image } = useSingleRecipe(
    props.match.params.id
  )
  const id = props.match.params.id
  let url = single_recipe.RecipeImages && single_recipe.RecipeImages[0].url
  console.log("single recipe ====----====>>>>", single_recipe)
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
          <Link
            to={`/edit-recipe/${id}`}
            className="header-component-create-recipe-button"
          >
            <button className="lg-u">Edit Recipe</button>
          </Link>
          <div className="single-recipe-social-media-buttons">
            <div>Share this recipe on social media!</div>
          </div>
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
