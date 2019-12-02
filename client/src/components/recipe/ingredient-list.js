import React from "react"
import Collapsible from "react-collapsible"
import { useIngredientsList } from "../../hooks"
import '../../styles/recipe/ingredient-list.css'

const IngredientList = props => {
  const { ingredients, food_group } = useIngredientsList()

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
            <p>{ingredient.food_group === group ? ingredient.name : ""}</p>
          ))}
       </Collapsible>
     ))}
    </div>
  )
}

export default IngredientList
