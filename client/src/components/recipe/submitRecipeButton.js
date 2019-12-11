import React, { useState } from "react"
import { useFullRecipe, useDirections } from "../../hooks"
import Switch from "react-switch"
import { useAuth } from "../../hooks"
import RecipeDirections from "./createRecipe-Directions"
import SetIngredients from "./recipe-List"
import { Dropdown } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import ImageUploader from "../pictureUpload/upload-pictures"
import bourdain from "../../Assets/bourbain.png"

const SubmitRecipeButton = props => {
  const options = [
    { value: "entree", text: "Entree" },
    { value: "desert", text: "Desert" },
    { value: "appertizer", text: "Appetizer" },
    { value: "snacks", text: "Snacks" },
    { value: "breakfest", text: "Breakfest/Brunch" },
    { value: "side-dish", text: "Side Dish" },
    { value: "family-dinner", text: "Family Dinner" },
    { value: "lunch", text: "Lunch" },
    { value: "african", text: "African" },
    { value: "asian", text: "Asian" },
    { value: "autralian", text: "Australian" },
    { value: "central-american", text: "Central American" },
    { value: "european", text: "European" },
    { value: "north-america", text: "North American" },
    { value: "south-america", text: "South American" }
  ]

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  const { fullRecipe, CreateRecipe, RecipeImages, initalIng } = useFullRecipe()

  // const { recipeHeaderInfo, recipeHeader } = useCreateRecipeHeader()
  const { directions, inital, create } = useDirections()

  const { username } = useAuth()
  console.log(username)
  const [isChecked, setIsChecked] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    // validation to check that the name, category, and description are not empty
    if (name === "" || category === "") {
      alert("please fill out the Recipe name And Category to Create a recipe")
    } else if (RecipeImages.length === 0) {
      alert("please choose a picture for your recipe")
    } else if (directions.length === 0) {
      alert("please provide at least one direction for your recipe")
    } else if (fullRecipe.length === 0) {
      alert(
        "please provied at least one ingredient and measurement for your recipe"
      )
    } else {
      let recipeHeaderInfo = { name, category, description }
      CreateRecipe(
        recipeHeaderInfo,
        fullRecipe,
        directions,
        isChecked,
        username,
        RecipeImages
      )

      inital()
      initalIng()
      setName("")
      setCategory("")
      setDescription("")
      console.log(username)
      console.log(
        recipeHeaderInfo,
        fullRecipe,
        directions,
        isChecked,
        username,
        RecipeImages
      )
    }
  }

  const handleChange = () => {
    setIsChecked(!isChecked)
    console.log(isChecked)
  }

  const handleInputChange = (e, { value }) => {
    console.log(value)
    setCategory(value)
  }

  return (
    <div className="createRecipeMain">
      <div className="create-recipe-form">
        <p className="create-a-recipe">Create A Recipe</p>
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
              onChange={e => setDescription(e.target.value)}
              className="createDescription"
              placeholder="This recipe has been in my family for years..."
            ></textarea>
          </div>
          <div className="recipe-Ing-Dir">
            <SetIngredients />
            <RecipeDirections />
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
            <div className="create-img-uploader">
              <ImageUploader />
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
        <img src={bourdain}></img>
      </div>
    </div>
  )
}

export default SubmitRecipeButton
