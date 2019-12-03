import React from "react"
import Collapsible from "react-collapsible"
import { useIngredientsList } from "../../hooks"
import "../../styles/recipe/ingredient-list.css"

const IngredientList = props => {
  const { ingredients, food_group } = useIngredientsList()

  // mapping through the food groups and using a react component accoridan call collapsible to generate the main titles. then inside each category I map through each ingredient where the food groups match.

  return (
    <div className="ingredient-list-container">
      {food_group.map((group, i) => (
        <Collapsible trigger={group} key={`collapsible-${i}`}>
          {ingredients.map((ingredient, x) => (
            <div className="ingredients-list-categories">
              {ingredient.food_group === group ? (
                <div className="ingredient-list-items">
                  <p>{ingredient.name}</p>
                  <button>+</button>
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
