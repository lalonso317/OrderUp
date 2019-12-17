import React, { useState } from "react"
import { useEditingRecipe } from "../../hooks"

const EditRecipeIngredients = props => {
  const [amount, setAmount] = useState("")
  const [d, setD] = useState("")
  const { createIngredient, removeIngredient, ingredients } = useEditingRecipe()
  const handleUserIngredients = e => {
    e.preventDefault()
    if (amount === "") {
      alert("Ingredient Cannot be Empty")
    } else {
      createIngredient(amount)
      setAmount("")
    }
  }
  const handleClick = e => {
    e.preventDefault()
    removeIngredient(d)
  }
  
  return (
    <div className="bottom">
      <div className="directions">
        <label className="labelDirection">{"Ingredients & Measurements"}</label>
        <form onSubmit={e => handleUserIngredients(e)}>
          <div className="submitDirection">
            <input
              className="inputDirections"
              type="text"
              placeholder="ex: 1 cup Olive Oil "
              value={amount}
              onChange={e => setAmount(e.target.value)}
            ></input>
          </div>
        </form>
        <div className="direct">
          {props.ingredients.map((item, i) => (
            <div key={i}>
              <form
                className="individualDirections"
                onSubmit={e => handleClick(e)}
              >
                <p className="step">
                  {" "}
                  {item.ingredientName == undefined ? "" : item.ingredientName}
                </p>
                <button
                  className="removeDirection"
                  type="submit"
                  onClick={e => setD(item.ingredientName)}
                >
                  {" "}
                  X{" "}
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default EditRecipeIngredients
