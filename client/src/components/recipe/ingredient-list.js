import React from "react"
import { useIngredientsList } from "../../hooks"

const IngredientList = props => {
  const { ingredients, food_group } = useIngredientsList()
  console.log(food_group)
  return (
    <div>
      {food_group.map(group => (
        <dl>
          <dt>{group}</dt>
          {ingredients.map(ingredient => (
            <dd>{ingredient.food_group === group ? ingredient.name : ''}</dd>
          ))}
        </dl>
      ))}
    </div>
  )
}

export default IngredientList
