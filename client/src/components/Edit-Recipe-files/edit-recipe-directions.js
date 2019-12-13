import React, { useState } from "react"
import { useDirections } from "../../hooks/index"
const EditRecipeDescription = props => {
  const [direct, setDirect] = useState("")
  const [d, setD] = useState("")
  const { create, directions, remove } = useDirections()
  const handleSubmit = e => {
    e.preventDefault()
    if (direct === "") {
      alert("Direction Needed")
    } else {
      create(direct)
      setDirect("")
    }
  }
  const handleClick = e => {
    e.preventDefault()
    remove(d)
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
            {directions.map((item, i) => (
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
