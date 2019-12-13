import React from "react"
import { Link } from "react-router-dom"
import "../styles/card.css"
const Card = props => {
  const {
    recipe_link: link,
    image_source: image,
    recipe_rating: ratings,
    recipe_title: title,
    username: owner,
    recipe_description: description,
    recipe_category: category
  } = props

  const findAVG = () => {
    const array = [13, 12, 33, 54, 33, 665, 44]
    const newValue = array.reduce((a, b) => {
      let sum = a + b
      let avg = Math.floor(sum / Number(array.length))
      return avg
    })
    return newValue
  }
  console.log("card ratings ======>>>>>>", findAVG())

  return (
    <div id="main-card-home" className="card text-center">
      <Link to={link}>
        <img
          id="card-img-top"
          className="card-img-top"
          src={image}
          alt=""
          width="325px"
          height="325px"
        />
      </Link>
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
