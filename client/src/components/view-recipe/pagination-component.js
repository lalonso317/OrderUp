import React from "react"
import { Pagination } from "semantic-ui-react"
import { useAllRecipes } from "../../hooks"
const PaginationComponent = props => {
  const { all_recipes } = useAllRecipes()

  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(all_recipes / 9); i++) {
    pageNumbers.push(i)
  }

  return <Pagination defaultActivePage={5} totalPages={pageNumbers} />
}

export default PaginationComponent
