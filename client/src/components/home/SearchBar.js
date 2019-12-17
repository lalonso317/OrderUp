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



  const handleSearch = e => {
    return <Link to={"/recipe/" + search}></Link>
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
        // onClick={e => handleSearch(e, title.recipe_id)}
        value={title.recipe_id}
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
