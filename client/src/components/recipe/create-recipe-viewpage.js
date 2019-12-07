import React from "react"
import SubmitRecipeButton from "./submitRecipeButton"
import "../../styles/recipe/create-recipe-viewpage.css"
import { useAuth } from "../../hooks"
import { Redirect } from "react-router-dom"

const CreateRecipeViewPage = props => {
  const { username, isAuthenticated } = useAuth()
  console.log("user from create recipe view page ===========>>>", username)
  return isAuthenticated ? (
    <div className="create-recipe-viewpage-container">
      <SubmitRecipeButton />
    </div>
  ) : (
    <Redirect to="/" />
  )
}

export default CreateRecipeViewPage
