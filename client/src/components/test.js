import React, { useState } from "react"
import Rating from "react-rating"
import EmptyStar from "../Assets/empty-star.png"
import FullStar from "../Assets/full-star.png"

const Stars = props => {
  const [rating_value, setRating_value] = useState(0)
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <p>User</p>
        </div>
        <div className="col">
          <Rating
            onHover={value => value}
            onChange={value => setRating_value(value)}
            emptySymbol={<img src={EmptyStar} width="30px" alt="" />}
            fullSymbol={<img src={FullStar} width="30px" alt="" />}
            start={0}
            stop={5}
            step={1}
            initialRating={0}
            direction="ltr"
          />
          {console.log(rating_value)}
        </div>
      </div>
    </div>
  )
}

export default Stars
