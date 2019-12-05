import React, { useState } from "react"
import { useFullRecipe, useDirections, useUsers } from "../../hooks"
import Switch from "react-switch"

import RecipeDirections from "./createRecipe-Directions"
import SetIngredients from "./recipe-List"
import { Dropdown } from "semantic-ui-react"

import "semantic-ui-css/semantic.min.css"
import { Link } from "react-router-dom"

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

  const { fullRecipe, CreateRecipe, recipeList } = useFullRecipe()
  // const { recipeHeaderInfo, recipeHeader } = useCreateRecipeHeader()
  const { directions } = useDirections()
  const { user } = useUsers()
  const [isChecked, setIsChecked] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    let recipeHeaderInfo = { name, category, description }
    CreateRecipe(recipeHeaderInfo, fullRecipe, directions, isChecked, user)
    console.log(user)
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
      {/* <CreateRecipeHeader /> */}
      <div className="fullRecipeForm">
        <form onSubmit={handleSubmit} className="createRecipeSubmitButtonForm">
          <div className="createRHContainer">
            <div className="createRHTitle">
              <Link to="/" className="back-arrow-to-homepage">
                &larr;
              </Link>
              <p className="createRHSiteName">Cook Swap!</p>
            </div>
            <div className="formforTop">
              <div className="createRHSubtitle">Create A Recipe</div>
              <div className="createRHRecipeName">
                {/* this is the first part of the form to create a recipe */}
                {/* <form onSubmit={createRecipeHeader}> */}
                <div className="createRHRecipeTitle">
                  <label htmlFor="title">Recipe Name</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="My Recipe"
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="createRHRecipeCategory">
                  <label htmlFor="CRHRcategory">Category</label>
                  {/* this is a semantic-ui component */}
                  <Dropdown
                    options={options}
                    selection
                    placeholder="Select recipe category..."
                    onChange={handleInputChange}
                  />
                </div>
                <div className="createRHRecipeDescription">
                  <textarea
                    onChange={e => setDescription(e.target.value)}
                    className="CRHRdescription"
                    placeholder="This recipe has been in my family for years..."
                  ></textarea>
                </div>
              </div>
              {/* </form> */}
            </div>
          </div>
          <div className="BottomHalfofPage">
            <div className="privacy">
              <label className="labelPrivacy">Privacy</label>
              <Switch
                onChange={handleChange}
                checked={isChecked}
                offColor="#ff0000"
                onColor="#108600"
                value={isChecked}
              />
            </div>
            <button type="submit">Create Recipe</button>
          </div>
        </form>
        <div className="middleofthePage">
          <SetIngredients />
          <RecipeDirections />
        </div>
      </div>
    </>
  )
}

export default SubmitRecipeButton
