import React, { useState } from "react"
import { useFullRecipe, useDirections } from "../../hooks"
import Switch from "react-switch"
import { useAuth } from "../../hooks"
import RecipeDirections from "./createRecipe-Directions"
import SetIngredients from "./recipe-List"
import { Dropdown } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import ImageUploader from "../pictureUpload/upload-pictures"

const SubmitRecipeButton = props => {
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

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  const { fullRecipe, CreateRecipe, RecipeImages } = useFullRecipe()
  // const { recipeHeaderInfo, recipeHeader } = useCreateRecipeHeader()
  const { directions } = useDirections()

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
  
    }
  }

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  const handleInputChange = (e, { value }) => {
    console.log(value)
    setCategory(value)
  }


  return (
    <>
      <div></div>
      <div className="createRHContainer">
        
        <div className="createRHRecipeName">
          <div className="createRHSubtitle">Create A Recipe</div>
          {/* this is the first part of the form to create a recipe */}
          <div className="createRHRecipeTitle">
            <label className="createTitle" htmlFor="title">
              Recipe Name
            </label>
            <input
              className="createRHRecipeInput"
              type="text"
              name="title"
              id="title"
              placeholder="My Recipe"
              onChange={e => setName(e.target.value)}
            />
            <div className="createRHRecipeCategory">
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
            <div className="createTitle">
              <label className="createTitle">Description</label>
            </div>
            <div className="createRHRecipeDescription">
              <textarea
                onChange={e => setDescription(e.target.value)}
                className="CRHRdescription"
                placeholder="This recipe has been in my family for years..."
              ></textarea>
            </div>
            <div className="BottomHalfofPage">
              <div className="middleofthePage"></div>
              <div className="privacy"></div>
            </div>
            <SetIngredients />
            <RecipeDirections />
            {isChecked ? (
              <label className="labelPrivacy">Public</label>
            ) : (
              <label className="labelPrivacy">Private</label>
            )}
            <div className="privacySwitch">
              <Switch
                onChange={handleChange}
                checked={isChecked}
                offColor="#000000"
                onColor="#eb7a3e"
                value={isChecked}
                className="privacySwitch"
              />
            </div>
            <div>
              <ImageUploader />
            </div>
            <form
              onSubmit={handleSubmit}
              className="createRecipeSubmitButtonForm"
            >
              <button className="finalSubmit" type="submit">
                Create Recipe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubmitRecipeButton
