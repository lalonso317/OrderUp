import React from "react"
import { Link } from "react-router-dom"
import Icon from "../../lib/Icon"
import Logo from "../../Assets/Logo.png"
import "../../styles/home/Header.css"
import { useAuth } from "../../hooks"

export default function PrivateHeader(props) {
  const { signout, username, isAuthenticated } = useAuth()

  const handleSignOut = e => {
    signout()
  }

  return (
    <div>
      <header className="header-component-header">
        <div className="header">
          <img src={Logo} className="logo" alt="Our company logo" />
        </div>
        <div className="header-component-all">
          {/* <h1 className="header-component-title">Cook Swap</h1> */}
          {/* <Icon icon="book" /> */}
          <aside className="header-component-social-links">
            <div className="header-component-social-media-icons">
              <a
                href={props.link_facebook}
                className="social-media-path"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="header-component-facebook-icon">
                  <Icon icon="facebook" />
                </div>
              </a>
              <a
                href={props.link_twitter}
                className="social-media-path"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="header-component-twitter-icon">
                  <Icon icon="twitter" />
                </div>
              </a>
              <a
                href={props.link_instagram}
                className="social-media-path"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="header-component-instagram-icon">
                  <Icon icon="instagram" />
                </div>
              </a>
              <a
                href={props.link_reddit}
                className="social-media-path"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="header-component-reddit-icon">
                  <Icon icon="reddit" />
                </div>
              </a>
              <h3>{username}</h3>
              <Link to={"/"}>
                <button onClick={e => handleSignOut(e)}>Sign Out</button>
              </Link>
            </div>
          </aside>
          <div className="header-component-description">
            <p>
              Hello and welcome to Cook Swap!!!! We are an all around recipe
              management site. With our services you will be able to view,
              share, and even create your own recipes.
            </p>
          </div>
          <div className="links-to-components">
            <Link to="/privateHome" className="header-component-home-button">
              <p className="social-media-path">
                <Icon icon="home" />
              </p>
            </Link>
            {/* <Link to="/login" className="header-component-login-button">
              <button className="lg">Login/Register</button>
            </Link> */}
            <Link
              to="/create-your-recipe"
              className="header-component-create-recipe-button"
            >
              <button className="lg">Create A Recipe</button>
            </Link>
            <Link
              to="/profile-page"
              className="header-component-profile-button"
            >
              <button className="lg">My Profile</button>
            </Link>
            <Link
              className="header-component-singleRecipe-button"
              to={"/recipe-single-view"}
            >
              <button className="lg">Single Recipe</button>
            </Link>
            <Link
              className="header-component-multiRecipe-button"
              to={"/all-recipes"}
            >
              <button className="lg">All Recipes</button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
