import React, { useState } from "react"
// import Link from "@material-ui/core/Link"
import { Link } from "react-router-dom"
import { useAllRecipes } from "../../hooks"
import TextField from "@material-ui/core/TextField"
import { Autocomplete } from "@material-ui/lab"

const SearchBar = props => {
  const all_recipes = useAllRecipes()
  const [search, setSearch] = useState(false)
  const title = all_recipes.map(option => ({
    id: option.recipe_id,
    title: option.recipeTitle
  }))

  console.log(title)

  const handleSearch = (e, id) => {
    e.preventDefault()
    return <Link to={"/recipe/" + id}></Link>
  }

  return (
    <div
      className="searchbar-container"
      style={{
        width: "60%"
      }}
    >
      <Autocomplete
        options={title.map(option => option.title)}
        disableOpenOnFocus={true}
        className="search-text-field"
        // onClick={}
        renderInput={params => (
          <TextField
            {...params}
            placeholder="Search All Recipes"
            variant="outlined"
            fullWidth
            InputProps={{ ...params.InputProps, type: "search" }}
          />
        )}
      />
    </div>
  )
}

export default SearchBar
