// this component is the Header of the Create a recipe page
// it includes the functionality to send an object containing the name, category and description of the recipe

import React, { useState } from "react"
import { Dropdown } from "semantic-ui-react"
import "../../styles/recipe/createRecipeHeader.css"
import { useCreateRecipeHeader } from "../../hooks"
import "semantic-ui-css/semantic.min.css"
import { Link } from "react-router-dom"

function CreateRecipeHeader(props) {
  // options to be available to the user in the dropdown component
  const options = [
    { value: "african", text: "African" },
    { value: "asian", text: "Asian" },
    { value: "autralian", text: "Australian" },
    { value: "central-american", text: "Central American" },
    { value: "european", text: "European" },
    { value: "north-america", text: "North American" },
    { value: "south-america", text: "South American" }
  ]

  // variables to be used to create the object of the name, category and description of the recipe
  const { recipeHeader, recipeHeaderInfo } = useCreateRecipeHeader()
  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")

  // function to handle the selection of the category name the user picks
  const handleInputChange = (e, { value }) => {
    setCategory(value)
  }
  // function to send the name of the recipe, category, and a description to the reducer
  function createRecipeHeader(e) {
    e.preventDefault()

    recipeHeader(name, category, description)
  }
  return (
    <div className="createRHContainer">
      <div className="createRHTitle">
        <Link to="/" className="back-arrow-to-homepage">
          &larr;
        </Link>
        <p className="createRHSiteName">Cook Swap!</p>
      </div>
      <div className="createRHSubtitle">Create A Recipe</div>
      <div className="createRHRecipeName">
        {/* this is the first part of the form to create a recipe */}
        <form onSubmit={createRecipeHeader}>
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
        </form>
      </div>
    </div>
  )
}

export default CreateRecipeHeader
