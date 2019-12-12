import React from "react"
import { Link } from "react-router-dom"
import "../styles/card.css"
const Card = props => {
  const {
    recipe_link: link,
    image_source: image,
    // recipe_rating: rating,
    recipe_title: title,
    username: owner,
    recipe_description: description,
    recipe_category: category
  } = props
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
