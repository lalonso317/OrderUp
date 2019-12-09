import React, { useState } from "react"
import { Dropdown, StepTitle } from "semantic-ui-react"
import Switch from "react-switch"
import ImageUploader from "../pictureUpload/upload-pictures"
import { useAllRecipes } from "../../hooks"
import { emptyStatement, enumStringBody } from "@babel/types"
const EditRecipe = props => {
  console.log(props)
  const id = props.match.params.recipeId
  const all_recipes = useAllRecipes()
  console.log(all_recipes)
  const thisRecipe = all_recipes.find(recipe => (recipe.recipeId = id))
  console.log(thisRecipe)
  const [category, setCategory] = useState(`${thisRecipe.recipeCategory}`)
  const [description, setDescription] = useState(
    `${thisRecipe.recipeDescription}`
  )
  const [ingredients, setIngredients] = useState(
    `${thisRecipe.ingredients.map(ings => ings.ingredientName)}`
  )
  const [directions, setDirections] = useState(
    `${thisRecipe.directions.map((directs, i) => i + 1 + "." + directs.step)}`
  )
  const [isChecked, setIsChecked] = useState(thisRecipe.private)
  const [title, setTitle] = useState(`${thisRecipe.recipeTitle}`)
  const options = [
    { value: "african", text: "African" },
    { value: "asian", text: "Asian" },
    { value: "autralian", text: "Australian" },
    { value: "central-american", text: "Central American" },
    { value: "european", text: "European" },
    { value: "north-america", text: "North American" },
    { value: "south-america", text: "South American" },
    { value: "entree", text: "Entree" }
  ]
  const handleInputChange = (e, { value }) => {
    console.log(value)
    setCategory(value)
  }
  const handleChange = () => {
    setIsChecked(!isChecked)
  }
  // function to submit the edited recipe
  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className="edit-recipe-container">
      <div>Edit Recipe</div>
      <div className="edit-recipe-title">
        <label>Title</label>
        <textarea
          placeholder="My Recipe Title"
          onChange={e => setTitle(e.target.value)}
          value={title}
        ></textarea>
      </div>
      <div className="edit-recipe-category">
        <label>Category</label>
        <Dropdown
          className="createDropdown"
          options={options}
          selection
          placeholder="Select recipe category..."
          onChange={handleInputChange}
          value={category}
        />
      </div>
      <div className="edit-recipe-description">
        <label>Description</label>
        <textarea
          placeholder="This is a great recipe"
          onChange={e => setDescription(e.target.value)}
          value={description}
        ></textarea>
      </div>
      <div className="edit-recipe-ingredients">
        <label>Ingredients</label>
        <textarea
          placeholder="List of ingredients"
          onChange={e => setIngredients(e.target.value)}
          value={ingredients.split(",").join("\n")}
        ></textarea>
      </div>
      <div className="edit-recipe-directions">
        <label>Directions</label>
        <textarea
          placeholder="Directions List"
          onChange={e => setDirections(e.target.value)}
          value={directions
            .split(",")
            .join("")
            .split(".")
            .join("\r\n")}
        ></textarea>
      </div>
      <div className="edit-recipe-switch">
        <Switch
          onChange={handleChange}
          checked={isChecked}
          offColor="#000000"
          onColor="#eb7a3e"
          value={isChecked}
          className="privacySwitch"
        />
      </div>
      <div className="edit-recipe-photos">
        <ImageUploader />
        {thisRecipe.RecipeImages.map((img, i) => {
          return <img key={i} src={img.url} width="100px" />
        })}
      </div>
      <div className="edit-recipe-submit-button">
        <form onSubmit={handleSubmit}>
          <button type="submit">Submit Edited Recipe</button>
        </form>
      </div>
    </div>
  )
}
export default EditRecipe
