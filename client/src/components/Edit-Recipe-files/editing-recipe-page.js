import React, { useState } from "react"
import {
  useFullRecipe,
  useDirections,
  useAllRecipes,
  useAuth,
  useUpdate,
  useEditingRecipe
} from "../../hooks"
import Switch from "react-switch"
import { Dropdown } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import ImageUploader from "../pictureUpload/upload-pictures"
import bourdain from "../../Assets/bourbain.png"
import EditRecipeDirections from "./edit-recipe-directions"
import EditRecipeIngredients from "./edit-recipe-ingredients"

const EditingRecipePage = props => {
  const id = props.match.params.recipeId
  const options = [
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

  const { update } = useUpdate()
  const { RecipeImages } = useFullRecipe()

  const { usernameEA } = useAuth()
  const all_recipes = useAllRecipes()
  //selecting the correct recipe to auto poplulate the text areas on the page
  const thisRecipe = all_recipes.find(recipe => recipe.recipe_id === id)
  const { directions, ingredients } = useEditingRecipe()
  // const ings = thisRecipe.recipeIngredients.map(ing => ing.ingredientName)
  // const directs = thisRecipe.recipeDirections.map(direct => direct.step)

  // variables used when submitting the edited recipe

  const recId = thisRecipe.recipe_id
  const [name, setName] = useState(`${thisRecipe.recipeTitle}`)
  const [category, setCategory] = useState(`${thisRecipe.recipeCategory}`)
  const [description, setDescription] = useState(
    `${thisRecipe.recipeDescription}`
  )
  const [isChecked, setIsChecked] = useState(thisRecipe.private)
  const [images, setImages] = useState(thisRecipe.RecipeImages)
  const realImages = [...RecipeImages, ...images]

  function handleSubmit(e) {
    e.preventDefault()
    // validation to check that the name, category, and description are not empty
    if (name === "" || category === "") {
      alert("please fill out the Recipe name And Category to Create a recipe")
    } else if (RecipeImages.length === 0) {
      alert("please choose a picture for your recipe")
    } else if (directions.length === 0) {
      alert("please provide at least one direction for your recipe")
    } else if (ingredients.length === 0) {
      alert(
        "please provied at least one ingredient and measurement for your recipe"
      )
    } else {
      let recipeHeaderInfo = { name, category, description }
      const fullRecipe = {
        ingredients: ingredients
      }
      update(
        recipeHeaderInfo,
        fullRecipe,
        directions,
        isChecked,
        usernameEA,
        realImages,
        recId
      )
      setName("")
      setCategory("")
      setDescription("")
    }
  }
  //   update(recipeHeader, fullRecipe, directs, checked, user, realImages, recId)
  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  const handleInputChange = (e, { value }) => {
    setCategory(value)
  }
  // function to delete image from array of images
  const handleDeleteImage = (e, url) => {
    e.preventDefault()
    setImages(realImages.filter(img => img.url !== url))
  }
  return (
    <div className="createRecipeMain">
      <div className="create-recipe-form">
        <p className="create-a-recipe">Edit Recipe</p>
        <div className="create-all-in-form">
          <div className="create-recipe-name">
            <label className="createTitle" htmlFor="title">
              Recipe Name
            </label>
            <input
              className="create-recipe-input-name"
              type="text"
              name="title"
              id="title"
              placeholder="My Recipe"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="create-recipe-category">
            <p className="createTitle" htmlFor="Drowdown">
              Category
            </p>
            <Dropdown
              className="createDropdown"
              options={options}
              selection
              placeholder="Select recipe category..."
              onChange={handleInputChange}
            />
          </div>
          <div className="create-recipe-description">
            <label className="createTitle">Description</label>

            <textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="createDescription"
              placeholder="This recipe has been in my family for years..."
            ></textarea>
          </div>
          <div className="recipe-Ing-Dir">
            <EditRecipeIngredients ingredients={ingredients} />
            <EditRecipeDirections directions={directions} />
          </div>
          <div className="create-privacy">
            {isChecked ? (
              <label className="labelPrivacy">Private</label>
            ) : (
              <label className="labelPrivacy">Public</label>
            )}

            <Switch
              onChange={handleChange}
              checked={isChecked}
              offColor="#cccccc"
              onColor="#eb7a3e"
              value={isChecked}
              className="privacySwitch"
            />
            <div className="edit-recipe-photos">
              <ImageUploader />
              {images.map((img, i) => {
                return (
                  <div key={i + "images"}>
                    <img key={i} src={img.url} width="100px" alt="" />
                    <button onClick={e => handleDeleteImage(e, img.url)}>
                      delete image
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="create-recipe-button">
            <form
              onSubmit={handleSubmit}
              className="createRecipeSubmitButtonForm"
            >
              <button
                className="create-final-button"
                id="finalSubmit"
                type="submit"
              >
                Create Recipe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="createRecipe-banner">
        <img src={bourdain} alt=""></img>
      </div>
    </div>
  )
}

export default EditingRecipePage
