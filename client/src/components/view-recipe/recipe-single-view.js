import React from "react"
import { Link } from "react-router-dom"
import { useSingleRecipe } from "../../hooks"
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
      <Link to={"/all-recipes"} className="single-recipe-view-back-button">
        <button>Back to Recipes</button>
      </Link>
      <p className="single-recipe-title">{single_recipe.recipeTitle}</p>
      <p className="single-recipe-creator">By: {single_recipe.owner}</p>
      <div className="single-recipe-image-container">
        <img
          src={single_recipe.RecipeImages && single_recipe.RecipeImages[0].url}
          alt=""
          className={
            url === default_image
              ? "single-recipe-default-image"
              : "single-recipe-image"
          }
        />
      </div>
      <div className="single-recipe-ingredients">
        <p>Ingredients</p>
        {single_recipe.ingredients &&
          single_recipe.ingredients.map((ing, i = 1) => (
            <div
              className="single-recipe-ingredients-list"
              key={`ingredient-${i++}`}
            >
              {i++}. {ing.ingredientName}
            </div>
          ))}
      </div>
      <div className="single-recipe-directions">
        <p>Directions</p>
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
      <Link
        to={`/edit-recipe/${id}`}
        className="header-component-create-recipe-button"
      >
        <button className="lg-u">Edit Recipe</button>
      </Link>
      <div className="single-recipe-social-media-buttons">
        <div>Share this recipe on social media!</div>
        <div className="social-share-buttons">
          <FacebookShareButton
            // href={"http://localhost:3000/"}
            url={"https://finediningsite.surge.sh/"}
            children={<FacebookIcon size={30} round={true} />}
          />
          <TwitterShareButton
            url={`http://localhost:3000/${id}`}
            children={<TwitterIcon size={30} round={true} />}
          />
        </div>
      </div>
    </div>
  )
}

export default ViewRecipeSingle

// !single_recipe.RecipeImages === null ? single_recipe.RecipeImages && single_recipe.RecipeImages[0].url : Burrito
