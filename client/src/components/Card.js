import React from "react"
import { Link } from "react-router-dom"
import "../styles/card.css"
import { useAllRecipes, useAuth, useFavorites } from "../hooks"
import Icon from "../lib/Icon"
const Card = props => {
  const { usernameEA, isAuthenticated } = useAuth()

  const {
    recipe_link: link,
    image_source: image,
    recipe_rating: ratings,
    recipe_title: title,
    username: owner,
    recipe_description: description,
    recipe_category: category,
    recipe_id
  } = props

  const { make } = useFavorites()

  const handleClick = (e, value) => {
    e.preventDefault()
    make(value, usernameEA)
  }

  const findAVG = () => {
    const array = [13, 12, 33, 54, 33, 665, 44]
    const newValue = array.reduce((a, b) => {
      let sum = a + b
      let avg = Math.floor(sum / Number(array.length))
      return avg
    })
    return newValue
  }

  return (
    <div
      id="main-card-home"
      className="card text-center"
      style={{ width: "325px" }}
    >
      <Link to={link}>
        <img
          id="card-img-top"
          className="card-img-top img-fluid main-card-img"
          src={image}
          alt=""
        />
      </Link>
      {isAuthenticated ? (
        <button
          onClick={e => handleClick(e, recipe_id)}
          className="home-heart"
          type="submit"
        >
          <Icon icon="heart" zIndex="-10"></Icon>
        </button>
      ) : (
        ""
      )}
      <div className="card-header">
        <h4 className="card-title">{title}</h4>
        <h6 className="card-subtitle">By - {owner}</h6>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="card-subtitle">Category - {category}</div>
          <div className="col-5"></div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <p className="card-text">{description}</p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <Link to={link} className="btn btn-outline-warning">
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Card
