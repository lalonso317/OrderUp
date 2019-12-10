import React, { useState } from "react"
import { useDirections } from "../../hooks/index"
import Icon from "../../lib/Icon"

const RecipeDescription = props => {
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

    // var newDirection = direction.filter(x => {
    //   return x.step !== d
    // })
    // console.log(direction, newDirection)
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
              <button type="submit" className="send">
                <Icon icon="arrow-right" />
              </button>
            </div>
          </form>
          <div className="direct">
            {directions.map((item, i) => (
              <div key={i}>
                <form className="individualDirections" onSubmit={handleClick}>
                  <p className="step"> {item.step}</p>
                  <button
                    className="removeDirection"
                    type="submit"
                    onClick={e => setD(item.step)}
                  >
                    {" "}
                    -{" "}
                  </button>
                </form>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default RecipeDescription
