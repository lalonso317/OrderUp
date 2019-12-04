import React, { useState } from "react"
import {
  useFullRecipe,
  useCreateRecipeHeader,
  useDirections,
  useUsers
} from "../../hooks"
import Switch from "react-switch"
import CreateRecipeHeader from "./create_recipe_header"

function SubmitRecipeButton(props) {
  const { fullRecipe, CreateRecipe, recipeList } = useFullRecipe()
  const { recipeHeaderInfo } = useCreateRecipeHeader()
  const { directions } = useDirections()
  const { user } = useUsers()
  const [isChecked, setIsChecked] = useState(false)
  function handleSubmit(e) {
    e.preventDefault()

    CreateRecipe(actualRecipe)
  }
  const actualRecipe = {
    recipeName: [recipeHeaderInfo, fullRecipe, directions, isChecked, user]
  }
  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <form onSubmit={handleSubmit} className="createRecipeSubmitButtonForm">
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
    </form>
  )
}

export default SubmitRecipeButton
