import React from "react"
import RecipeCard from "./Recipe-Card"
import "../../styles/home/Recipe-Grid.css"
import Card from "../Card"
import { useAllRecipes, useAuth } from "../../hooks"
import OrderUp from "../../Assets/orderUpfavs.png"
const RecipeGrid = props => {
  const all_recipes = useAllRecipes()
  const { username } = useAuth()
  return (
    <>
      <div className="recipe-grid-flex">
        <aside>
          <div>
            <img className="order-up-banner" src={OrderUp} />
          </div>
        </aside>
        <div className="recipe-grid-container">
          {/* <RecipeCard
    <div className="recipe-grid-container  ">
      {/* <RecipeCard
        recipe_link="https://www.google.com/"
        image_source="http://placehold.it/200/200"
        recipe_rating="3.54/5"
        recipe_title="Famous Cook Swap Cookies"
        username="Famous Chef"
        recipe_description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil
        mollitia neque ex corrupti perferendis pariatur repudiandae nam
        expedita molestiae, voluptatibus ipsa ducimus eum veniam et.
        Adipisci asperiores impedit cupiditate sint ea sit numquam ullam
        sunt autem, nihil explicabo omnis expedita quae pariatur! Delectus
        ad in eligendi deleniti. Itaque, delectus perferendis."
      /> */}
          {all_recipes.slice(0, 6).map(recipe => (
            <RecipeCard
              recipe_link={`/recipe/${recipe.recipe_id}`}
              image_source={recipe.RecipeImages[0].url}
              recipe_rating="3.54/5"
              username={recipe.owner ? recipe.owner : "Anonymous"}
              recipe_title={recipe.recipeTitle}
              recipe_description={recipe.recipeDescription}
            />
          ))}
        </div>
      </div>
    </>
      {all_recipes.slice(0, 6).map(recipe => (
        // <RecipeCard
        //   recipe_link={`/recipe/${recipe.recipe_id}`}
        //   image_source={recipe.RecipeImages[0].url}
        //   recipe_rating="3.54/5"
        //   username={recipe.owner ? recipe.owner : "Anonymous"}
        //   recipe_title={recipe.recipeTitle}
        //   recipe_description={recipe.recipeDescription}
        // />
        <Card

          recipe_link={`/recipe/${recipe.recipe_id}`}
          image_source={recipe.RecipeImages[0].url}
          recipe_rating="3.54/5"
          username={recipe.owner ? recipe.owner : "Anonymous"}
          recipe_title={recipe.recipeTitle}
          recipe_description={recipe.recipeDescription}
          recipe_category={recipe.recipeCategory}
        />
      ))}
    </div>
  )
}

export default RecipeGrid
