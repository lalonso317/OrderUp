import React, { useState } from "react"
import { useFullRecipe, useDirections, useUsers } from "../../hooks"
import Switch from "react-switch"
import { useAuth } from "../../hooks"

import RecipeDirections from "./createRecipe-Directions"
import SetIngredients from "./recipe-List"
import { Dropdown } from "semantic-ui-react"

import "semantic-ui-css/semantic.min.css"
import { Link } from "react-router-dom"
import ImageUploader from "../pictureUpload/upload-pictures"

function SubmitRecipeButton(props) {
  const options = [
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

  const { fullRecipe, CreateRecipe, recipeList, RecipeImages } = useFullRecipe()
  // const { recipeHeaderInfo, recipeHeader } = useCreateRecipeHeader()
  const { directions } = useDirections()
  const { username } = useAuth()
  const [isChecked, setIsChecked] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
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

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  const handleInputChange = (e, { value }) => {
    console.log(value)
    setCategory(value)
  }
  // function to send the name of the recipe, category, and a description to the reducer
  // function createRecipeHeader(e) {
  //   e.preventDefault()

  //   recipeHeader(name, category, description)
  // }

  return (
    <>
      <div></div>
      <div className="createRHContainer">
        <div className="createRHRecipeName">
          <div className="createRHSubtitle">Create A Recipe</div>
          <div>
            <ImageUploader />
          </div>
          {/* this is the first part of the form to create a recipe */}
          <div className="createRHRecipeTitle">
            <form
              onSubmit={handleSubmit}
              className="createRecipeSubmitButtonForm"
            >
              <p className="createTitle" htmlFor="title">
                Recipe Name
              </p>
              <input
                className="createRHRecipeInput"
                type="text"
                name="title"
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
              <div className="createRHRecipeDescription">
                <label className="createTitle">Desciption</label>
                <textarea
                  onChange={e => setDescription(e.target.value)}
                  className="CRHRdescription"
                  placeholder="This recipe has been in my family for years..."
                ></textarea>
              </div>
              <div className="BottomHalfofPage">
                <div className="middleofthePage">
                  <SetIngredients />
                  <RecipeDirections />
                </div>
                <div className="privacy">
                  <label className="labelPrivacy">Privacy</label>
                  <Switch
                    onChange={handleChange}
                    checked={isChecked}
                    offColor="#ff0000"
                    onColor="#108600"
                    value={isChecked}
                    className="privacySwitch"
                  />
                  <button className="finalSubmit" type="submit">
                    Create Recipe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubmitRecipeButton
