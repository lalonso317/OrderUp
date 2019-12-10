import React from "react"

const Card = props => {
  const {
    recipe_link: link,
    image_source: image,
    recipe_rating: rating,
    recipe_title: title,
    username: owner,
    recipe_description: description,
    recipe_category: category
  } = props
  return (
    <div className="card text-center" style={{width: "400px"}} >
      <img className="card-img-top" src={image} alt=""  width="400px" height="400px"/>
      <div className="card-header">
        <h4 className="card-title">{title}</h4>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-7">
            <h6 className="card-subtitle">Category - {category}</h6>
          </div>
          <div className="col-5">
            <h6 className="card-subtitle">By - {owner}</h6>
          </div>
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
            <a href={link} className="btn btn-outline-warning">
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
