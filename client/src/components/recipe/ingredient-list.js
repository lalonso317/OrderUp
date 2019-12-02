import React from "react"
import Collapsible from "react-collapsible"
import { useIngredientsList } from "../../hooks"
import "../../styles/recipe/ingredient-list.css"

const IngredientList = props => {
  const { ingredients, food_group } = useIngredientsList()
  console.log(food_group)

  // const filterIngredients = (ingredient,group) => {
  //   if (ingredient.food_group === group)
  // }
  return (
    <div className="ingredient-list-container">
      {/* {food_group.map(group => (
        <dl>
          <dt>{group}</dt>
          {ingredients.map(ingredient => (
            <dd>{ingredient.food_group === group ? ingredient.name : ""}</dd>
          ))}
        </dl>
      ))} */}
      {food_group.map(group => (
        <Collapsible trigger={group}>
          {ingredients.map(ingredient => (
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
