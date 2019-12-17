import React, { useState, useEffect } from "react"

import { useAllRecipes, useFilteredCategoryRecipes } from "../../hooks"
import { Dropdown } from "semantic-ui-react"

const CategoryFilter = props => {
  const [category, setCategory] = useState("")
  const all_recipes = useAllRecipes()
  const { categoryFilter, firstSetRecipes } = useFilteredCategoryRecipes()
  const options = [
    { value: "all", text: "All Recipes" },
    { value: "Entree", text: "Entree" },
    { value: "Desert", text: "Desert" },
    { value: "Appertizer", text: "Appetizer" },
    { value: "Snacks", text: "Snacks" },
    { value: "Beakfest", text: "Breakfest/Brunch" },
    { value: "Side Dish", text: "Side Dish" },
    { value: "Family Dinner", text: "Family Dinner" },
    { value: "Lunch", text: "Lunch" },
    { value: "African", text: "African" },
    { value: "Asian", text: "Asian" },
    { value: "Autralian", text: "Australian" },
    { value: "Central American", text: "Central American" },
    { value: "European", text: "European" },
    { value: "North America", text: "North American" },
    { value: "South America", text: "South American" }
  ]


  const handleInputChange = (e, { value }) => {
    setCategory(value)
    if (value == "all") {
      firstSetRecipes(all_recipes)
    } else {
      sendNewCategory(value)
    }
  }

  const sendNewCategory = category => {
    const newRecipes = all_recipes.filter(
      recipes => recipes.recipeCategory == category
    )
    categoryFilter(newRecipes)
  }
  return (
    <div>
      <Dropdown
        className="createDropdown"
        options={options}
        selection
        // defaultValue={selected}
        placeholder="Select recipe category..."
        onChange={handleInputChange}
      />
    </div>
  )
}

export default CategoryFilter
