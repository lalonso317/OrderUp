import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSingleRecipe, useAuth, useFavorites } from "../../hooks"
import CommentComponent from "../comments/comment-component"
import goodFood from "../../Assets/goodfood.png"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share"
import Icon from "../../lib/Icon"
import Rating from "react-rating"
import EmptyStar from "../../Assets/empty-star.png"
import FullStar from "../../Assets/full-star.png"

const ViewRecipeSingle = props => {
  const {
    single_recipe,
    default_image,
    SpecificComments,
    add
  } = useSingleRecipe(props.match.params.id)
  console.log(single_recipe)

  const { usernameEA, isAuthenticated } = useAuth()
  const { make } = useFavorites()
  const id = props.match.params.id
  const [rating_value, setRating_value] = useState(0)
  const [favor, setFavor] = useState(single_recipe.recipe_id)

  let url = single_recipe.RecipeImages && single_recipe.RecipeImages[0].url

  console.log(
    "single recipe comment ====----====>>>>",
    single_recipe.comments ? single_recipe.comments[0] : ""
  )
  // for favorite
  const handleClick = e => {
    e.preventDefault()
    console.log(favor, usernameEA)
    make(favor, usernameEA)
  }
  // for ratings
  const handleClickEvent = (id, user, value) => {
    console.log("ryan", id, user, value)
    add(id, user, value)
  }
  const ratingCheck = () => {
    if (
      single_recipe.ratings &&
      single_recipe.ratings[single_recipe.ratings.length - 1]
    ) {
      return (
        single_recipe.ratings &&
        single_recipe.ratings[single_recipe.ratings.length - 1].value
      )
    }
  }

  const defaultRating = () => {
    setRating_value(3)
    return rating_value
  }
  console.log("single recipe  ====----====>>>>", single_recipe)
  console.log("username from single view ==========>>>", usernameEA)
  console.log("rating Value =========>>>>>>>>>", rating_value)

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
                onClick={value =>
                  handleClickEvent(
                    props.match.params.id,
                    usernameEA ? usernameEA : "Anon",
                    value
                  )
                }
                onHover={value => value}
                onChange={value => setRating_value(value)}
                emptySymbol={<img src={EmptyStar} width="30px" alt="" />}
                fullSymbol={<img src={FullStar} width="30px" alt="" />}
                start={0}
                stop={5}
                step={1}
                initialRating={
                  // single_recipe.ratings &&
                  // single_recipe.ratings[single_recipe.ratings.length - 1]
                  //   ? single_recipe.ratings &&
                  //     single_recipe.ratings[single_recipe.ratings.length - 1]
                  //       .value
                  //   : 3
                  rating_value !== 0 ? rating_value : ratingCheck()
                }
                direction="ltr"
              />

              <h2 className="rating-display-numbers">{`${
                rating_value !== 0
                  ? rating_value
                  : ratingCheck() === undefined
                  ? 0
                  : ratingCheck()
              }/5`}</h2>
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
        <img className="goodfood" src={goodFood} alt="" />
      </div>
    </div>
  )
}
//     <div className="single-recipe-view-container">
//       <div className="single-recipe-view-main">
//         <Link
//           style={{ textDecoration: "none", color: "white" }}
//           to={"/all-recipes"}
//           className="single-recipe-view-back-button"
//         >
//           <button>Back to Recipes</button>
//         </Link>
//         <div>
//           <p style={{ color: "white" }}>{single_recipe.recipeTitle}</p>
//           <p>{single_recipe.owner}</p>
//         </div>
//         <div className="single-recipe-social-media-buttons">
//           <div>Share this recipe on social media!</div>
//           <div className="social-share-buttons">
//             <FacebookShareButton
//               // href={"http://localhost:3000/"}
//               url={"https://finediningsite.surge.sh/"}
//               children={<FacebookIcon size={30} round={true} />}
//             />
//             <TwitterShareButton
//               url={`http://localhost:3000/${id}`}
//               children={<TwitterIcon size={30} round={true} />}
//             />
//           </div>

//           <div className="single-recipe-image-container">
//             <br />
//             <img
//               src={
//                 single_recipe.RecipeImages && single_recipe.RecipeImages[0].url
//               }
//               alt=""
//               className={
//                 url === default_image
//                   ? "single-recipe-default-image"
//                   : "single-recipe-image"
//               }
//             />
//           </div>

//           <div className="single-Ing-Dir">
//             <div className="single-recipe-ingredients">
//               <p className="single-dirNing">Ingredients</p>
//               {single_recipe.ingredients &&
//                 single_recipe.ingredients.map((ing, i = 1) => (
//                   <div
//                     className="single-recipe-directions-list"
//                     key={`ingredient-${i++}`}
//                   >
//                     {i++}. {ing.ingredientName}
//                   </div>
//                 ))}
//             </div>
//             <div className="single-recipe-directions">
//               <p className="single-dirNing">Directions</p>
//               {single_recipe.directions &&
//                 single_recipe.directions.map((direction, i = 1) => (
//                   <div
//                     className="single-recipe-directions-list"
//                     key={`direction-${i++}`}
//                   >
//                     {i++}. {direction.step}
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//         <CommentComponent id={id} />
//         {isAuthenticated && usernameEA == single_recipe.owner ? (
//           <Link
//             to={`/edit-recipe/${id}`}
//             className="header-component-create-recipe-button"
//           >
//             <button className="lg-u"></button>
//           </Link>
//         ) : (
//           <Link
//             to={`/edit-recipe/${id}`}
//             className="header-component-create-recipe-button"
//           >
//             <button className="lg-u">Edit Recipe</button>
//           </Link>
//         )}
//       </div>
//       <div>
//         <img className="goodfood" src={goodFood} />
//       </div>
//     </div>
//   )
// }

export default ViewRecipeSingle

// !single_recipe.RecipeImages === null ? single_recipe.RecipeImages && single_recipe.RecipeImages[0].url : Burrito
