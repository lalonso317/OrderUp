import React, { useState } from "react"
import { useEditingRecipe } from "../../hooks/index"
const EditRecipeDescription = props => {
  //   const ings = props.ingredients
  //   const directs = props.directions
  const { directions, createdirect, removedirect } = useEditingRecipe()
  const [direct, setDirect] = useState("")
  const [d, setD] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    if (direct === "") {
      alert("Direction Needed")
    } else {
      createdirect(direct)
      setDirect("")
    }
  }
  const handleClick = e => {
    e.preventDefault()
    removedirect(d)
  }

  return (
    <>
      <div className="bottom">
        <div className="directions">
          <label className="labelDirection">Create Directions</label>
          <form onSubmit={e => handleSubmit(e)}>
            <div className="submitDirection">
              <input
                className="inputDirections"
                type="text"
                placeholder="Write out the steps..."
                value={direct}
                onChange={e => setDirect(e.target.value)}
              ></input>
            </div>
          </form>
          <div className="direct">
            {props.directions.map((item, i) => (
              <form key={i} onSubmit={handleClick}>
                <div className="individualDirections">
                  <p className="step"> {item.step}</p>
                  <button
                    className="removeDirection"
                    type="submit"
                    onClick={e => setD(item.step)}
                  >
                    X
                  </button>
                </div>
              </form>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default EditRecipeDescription
