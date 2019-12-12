import React, { useState } from "react"
import { Dropdown } from "semantic-ui-react"
import Switch from "react-switch"
import ImageUploader from "../pictureUpload/upload-pictures"
import { useAllRecipes, useUpdate, useFullRecipe } from "../../hooks"

const EditRecipe = props => {
  const id = props.match.params.recipeId
  // reference to hooks being imported
  const { update } = useUpdate()
  const all_recipes = useAllRecipes()

  // const thisRecipe = all_recipes.find(recipe => recipe.recipeId == id)

  const { RecipeImages } = useFullRecipe()
  //selecting the correct recipe to auto poplulate the text areas on the page
  const thisRecipe = all_recipes.find(recipe => recipe.recipe_id === id)
  console.log("this one ", thisRecipe)

  // variables used when submitting the edited recipe
  //recipe id
  const recId = thisRecipe.recipe_id
  //title
  const [title, setTitle] = useState(`${thisRecipe.recipeTitle}`)
  //category
  const [category, setCategory] = useState(`${thisRecipe.recipeCategory}`)
  //description
  const [description, setDescription] = useState(
    `${thisRecipe.recipeDescription}`
  )
  //ingredients
  const [ingredients, setIngredients] = useState(
    `${thisRecipe.recipeIngredients.map(ings => ings.ingredientName)}`
  )
  //directions
  const [directions, setDirections] = useState(
    `${thisRecipe.recipeDirections.map(
      (directs, i) => i + 1 + "." + directs.step
    )}`
  )
  //is checked?
  const [isChecked, setIsChecked] = useState(thisRecipe.private)
  //images
  const [images, setImages] = useState(thisRecipe.RecipeImages)

  const realImages = [...RecipeImages, ...images]
  console.log("realImgsdf", realImages)
  // values for the categories of the recipes
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
  // function for the select box
  const handleInputChange = (e, { value }) => {
    console.log(value)
    setCategory(value)
  }
  // function for the privacy switch
  const handleChange = () => {
    setIsChecked(!isChecked)
  }
  // function to submit the edited recipe
  const handleSubmit = e => {
    e.preventDefault()
    const recipeHeader = {
      category: category,
      name: title,
      description: description
    }
    const fullRecipe = {
      ingredients: { ingredientName: ingredients.split("\n") }
    }
    const directs = [{ step: directions.split("\n").toString() }]
    const checked = isChecked
    const user = thisRecipe.owner
    const testDirects = directions.split("\n")
    console.log("testDirects", testDirects)
    console.log("this is the full shit", [
      recipeHeader,
      fullRecipe,
      directs,
      checked,
      user,
      realImages
    ])
    update(recipeHeader, fullRecipe, directs, checked, user, realImages, recId)
  }
  // function to delete image from array of images
  const handleDeleteImage = (e, url) => {
    e.preventDefault()
    setImages(realImages.filter(img => img.url !== url))
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
        {/* 
        {images.map((img, i) => {
          return (
            <div key={i + "images"}>
              <img key={i} src={img.url} width="100px" alt=""/>
              <button onClick={e => handleDeleteImage(e, img.url)}>
                delete image
              </button>
            </div>
          )
        })} */}
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
