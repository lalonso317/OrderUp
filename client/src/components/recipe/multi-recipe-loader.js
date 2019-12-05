import React from 'react'
import MultiRecipeViewPage from './multi-recipe-view-page'


const MultiRecipeLoader = props => {
  const fakeArrayOfRecipes = [
    {
      name: "Chocolate Cake",
      ingredients: [
        { name: "sugar", portion: 4, metric: "cups" },
        { name: "baking soda", portion: 1 / 2, metric: "teaspoons" }
      ],
      directions: [
        { step_1: "Combine all dry ingredients into a large mixing bowl" },
        { step_2: "Whisk in the wet ingredients with the dry" },
        { step_3: "bake in a convection oven" }
      ],
      description: "Makes a wonderfully fluffy Chocolate Cake.",
      user: "Mark Yaknowe"
    },
    {
      name: "Banana Pudding",
      ingredients: [
        { name: "sugar", portion: 4, metric: "cups" },
        { name: "baking soda", portion: 1 / 2, metric: "teaspoons" }
      ],
      directions: [
        { step_1: "Combine all dry ingredients into a large mixing bowl" },
        { step_2: "Whisk in the wet ingredients with the dry" },
        { step_3: "bake in a convection oven" }
      ],
      description: "Makes a wonderfully fluffy Chocolate Cake.",
      user: "Ryan Lee"
    },
    {
      name: "Sunday Suprise",
      ingredients: [
        { name: "sugar", portion: 4, metric: "cups" },
        { name: "baking soda", portion: 1 / 2, metric: "teaspoons" }
      ],
      directions: [
        { step_1: "Combine all dry ingredients into a large mixing bowl" },
        { step_2: "Whisk in the wet ingredients with the dry" },
        { step_3: "bake in a convection oven" }
      ],
      description: "Makes a wonderfully fluffy Chocolate Cake.",
      user: "Mike Sweeney"
    },
    {
      name: "Quiche",
      ingredients: [
        { name: "sugar", portion: 4, metric: "cups" },
        { name: "baking soda", portion: 1 / 2, metric: "teaspoons" }
      ],
      directions: [
        { step_1: "Combine all dry ingredients into a large mixing bowl" },
        { step_2: "Whisk in the wet ingredients with the dry" },
        { step_3: "bake in a convection oven" }
      ],
      description: "Makes a wonderfully fluffy Chocolate Cake.",
      user: "Guy Richardo"
    }
  ]
  return (
    <div>
      <MultiRecipeViewPage recipeArray={fakeArrayOfRecipes}/>
    </div>
  )
}


export default MultiRecipeLoader