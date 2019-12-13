import React from "react"
import SharingPic from "../../Assets/sharing.jpg"
import CookBook from "../../Assets/cookbook.jpg"
import Creating from "../../Assets/creating.jpg"
import { Link } from "react-router-dom"

const SiteFeatures = props => {
  return (
    <div className="site-features-container">
      <div className="site-feature-list-container">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to="/all-recipes"
        >
          <div className="site-feature-list-titles">View</div>
          <img
            src={CookBook}
            className="site-feature-images"
            width="320px"
            height="211.5px"
            alt=""
          />
          <div className="site-feature-list-descriptions">
            Browse our recipes to find something new and exciting and try it
            out!
          </div>
        </Link>
      </div>
      <div className="site-feature-list-container-main">
        <Link
          style={{ textDecoration: "none", color: "white" }}
          to={"/create-your-recipe"}
        >
          <div className="site-feature-list-titles">Create</div>
          <img
            src={Creating}
            className="site-feature-images"
            width="320px"
            alt=""
          />
          <div className="site-feature-list-descriptions">
            You are able to create recipes and store them all in a single place
            on our site, don't worry about having to sift through files at home
            to find the recipe you are looking for...
          </div>
        </Link>
      </div>
      <div className="site-feature-list-container">
        <Link style={{ textDecoration: "none", color: "white" }} to={"/share"}>
          <div className="site-feature-list-titles">Share</div>
          <img
            src={SharingPic}
            className="site-feature-images"
            width="320px"
            alt=""
          />
          <div className="site-feature-list-descriptions">
            Be able to share your recipes with friends and family through social
            media or email, also choose whether your recipes can be viewed by
            others on the site to share your creations with the world
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SiteFeatures
