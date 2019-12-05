import React from "react"
import RecipeCard from "./Recipe-Card"
import "../../styles/home/Recipe-Grid.css"
import { useFullRecipe } from "../../hooks"

const RecipeGrid = props => {
  const { fullRecipe, recipeList, allRecipes } = useFullRecipe()
  console.log("full Recipe ==========<>>>>", fullRecipe)
  console.log("Recipe List ----------!!!!!----->>>>", recipeList)
  console.log("All Recipes ========>>>", allRecipes)
  return (
    <div className="recipe-grid-container">
      <RecipeCard
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
      />
      <RecipeCard
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
      />
      <RecipeCard
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
      />
      <RecipeCard
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
      />
      <RecipeCard
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
      />
      <RecipeCard
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
      />
    </div>
  )
}

export default RecipeGrid
