import React from "react"
import { Link } from "react-router-dom"
import { useSingleRecipe, useAuth } from "../../hooks"
import CommentComponent from "../comments/comment-component"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share"
import { UsernameAttributes } from "aws-amplify-react/lib-esm/Auth/common/types"
const ViewRecipeSingle = props => {
  const { single_recipe, default_image, SpecificComments } = useSingleRecipe(
    props.match.params.id
  )
  const { usernameEA, isAuthenticated } = useAuth()
  const id = props.match.params.id
  let url = single_recipe.RecipeImages && single_recipe.RecipeImages[0].url
  console.log("single recipe ====----====>>>>", single_recipe)
  return (
    <div className="single-recipe-view-container">
      <Link to={"/all-recipes"} className="single-recipe-view-back-button">
        <button>Back to Recipes</button>
      </Link>
      <p className="single-recipe-title">{single_recipe.recipeTitle}</p>
      <p className="single-recipe-creator">
        By:{" "}
        <Link to={"/profile-page/" + single_recipe.owner}>
          {single_recipe.owner}
        </Link>
      </p>
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

        {/* {comments.map((comment, i) => {
          return (
            <div>
              <Comment>
                <Comment.Avatar src={comment.avatar} width="50px" />
                <Comment.Content>
                  <Comment.Author as="a">{comment.author}</Comment.Author>
                  <Comment.Metadata>
                    <div>{comment.meta}</div>
                  </Comment.Metadata>
                  <Comment.Text>{comment.text}</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>
            </div>
          )
        })} */}
        <CommentComponent id={id} />
      </div>
      {isAuthenticated && usernameEA == single_recipe.owner ? (
        <Link
          to={`/edit-recipe/${id}`}
          className="header-component-create-recipe-button"
        >
          <button className="lg-u">Edit Recipe</button>
        </Link>
      ) : (
        ""
      )}
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
