import React from "react"
import SubmitRecipeButton from "./submitRecipeButton"
import "../../styles/recipe/create-recipe-viewpage.css"
import { useAuth } from "../../hooks"
import { Redirect } from "react-router-dom"

const CreateRecipeViewPage = props => {
  const { usernameEA, isAuthenticated } = useAuth()
  return isAuthenticated ? (
    <div className="create-recipe-viewpage-container">
      <SubmitRecipeButton />
    </div>
  ) : (
    <Redirect to="/login" />
  )
}

export default CreateRecipeViewPage
