import React, { useState } from "react"
import { useAuth, useFavorites } from "../../hooks"
import Icon from "../../lib/Icon"

const Favorites = props => {
  const [favor, setFavor] = useState("")
  const { usernameEA } = useAuth()
  const { make, get, fav } = useFavorites()

  const handleClick = favor => {
    setFavor("123")
  }

  return (
    <div>
      <h2>{usernameEA}</h2>
      <button onClick={handleClick} value={favor}>
        <Icon icon="heart"></Icon>
      </button>
      <div></div>
    </div>
  )
}

export default Favorites
