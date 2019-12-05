import React from "react"
import { Link } from "react-router-dom"
const ViewRecipeMulti = props => {
  return (
    <div>
      <div>Multi Recipe Page</div>
      <Link to={"/"}>Back to Home</Link>
      <Link to={"/recipe-single-view"}>View this recipe</Link>
    </div>
  )
}

export default ViewRecipeMulti
