import React from "react"
import { Link } from "react-router-dom"
import Burrito from "../../Assets/Burrito.jpeg"
import { useSingleRecipe } from "../../hooks"

const ViewRecipeSingle = props => {
  const single_recipe = useSingleRecipe(props.match.params.id)
  console.log("single recipe ====----====>>>>", single_recipe)
  return (
    <div>
      <div>Single Recipe Page</div>
      <div>
        <Link to={"/"}>
          <button>Back to Home</button>
        </Link>
        <Link to={"/all-recipes"}>
          <button>Back to Recipes</button>
        </Link>
      </div>
      <div className="single-recipe-view-container">
        <p className="single-recipe-title">{single_recipe.recipeTitle}</p>
        <p className="single-recipe-creator">Created by Recipe Creator</p>
        <div className="single-recipe-image">
          <img src={Burrito} width="600px" alt="Burrito" />
        </div>
        <div className="single-recipe-ingredients">
          <p>Ingredients</p>
          {single_recipe.ingredients && single_recipe.ingredients.map((ing,i = 1) => (
            <div className="single-recipe-ingredients-list" key={`ingredient-${i++}`}>{i++}. {ing.ingredientName}</div>
          ))}
        </div>
        <div className="single-recipe-directions">
          <p>Directions</p>
          {single_recipe.directions && single_recipe.directions.map((direction,i = 1) => (
            <div className="single-recipe-directions-list" key={`direction-${i++}`}>{i++}. {direction.step}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ViewRecipeSingle



// !single_recipe.RecipeImages === null ? single_recipe.RecipeImages && single_recipe.RecipeImages[0].url : Burrito