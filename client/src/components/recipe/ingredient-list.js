import React, { useState } from "react"
import Collapsible from "react-collapsible"
import { useIngredientsList } from "../../hooks"
import "../../styles/recipe/ingredient-list.css"

const IngredientList = props => {
  const { ingredients, food_group, picked, pickedItem } = useIngredientsList()

  // mapping through the food groups and using a react component accoridan call collapsible to generate the main titles. then inside each category I map through each ingredient where the food groups match.

  // function for the + button to send an object to the reducer
  // the object will include the item name
  const [name, setName] = useState("")

  function handleclick(e) {
    e.preventDefault()

    picked(name)
  }
  return (
    <div className="ingredient-list-container">
      {food_group.map((group, i) => (
        <Collapsible trigger={group} key={`collapsible-${i}`}>
          {ingredients.map((ingredient, x) => (
            <div
              key={`ingredient--${x}`}
              className="ingredients-list-categories"
            >
              {ingredient.food_group === group ? (
                <div className="ingredient-list-items">
                  <form onSubmit={handleclick} className="ingredient-list-form">
                    <p>{ingredient.name}</p>
                    {/* {pickedItem.length > 0 ? (
                      <div>
                        {pickedItem.find(item =>
                          item.name == ingredient.name ? (
                            ""
                          ) : ( */}
                    <button
                      onClick={e =>
                        setName({
                          ingredient: ingredient.name,
                          active: true
                        })
                      }
                    >
                      +
                    </button>
                    {/* )
                        )}
                      </div>
                    ) : (
                      ""
                    )} */}
                  </form>
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
        </Collapsible>
      ))}
    </div>
  )
}

export default IngredientList
