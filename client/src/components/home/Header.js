import React from "react"
import Icon from "../../lib/Icon"
import "../../styles/home/Header.css"
import { Link } from "react-router-dom"

const Header = props => {
  return (
    <>
      <Link to="/login" className="header-component-login-button">
        <button>Login/Register</button>
      </Link>
      <Link
        to="/create-your-recipe"
        className="header-component-create-recipe-button"
      >
        <button>Create A Recipe</button>
      </Link>
      <Link to="/profile-page" className="header-component-profile-button">
        <button>My Profile</button>
      </Link>
      <Link
        className="header-component-singleRecipe-button"
        to={"/recipe-single-view"}
      >
        <button>Single Recipe</button>
      </Link>
      <Link to="/" className="header-component-home-button">
        <Icon icon="home" />
      </Link>
      <header className="header-component-header">
        <h1 className="header-component-title">Cook Swap</h1>
        <Icon icon="book" />
        <aside className="header-component-social-links">
          <ul className="header-component-social-media-icons">
            <a
              href={props.link_facebook}
              className="social-media-path"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="header-component-facebook-icon">
                <Icon icon="facebook" />
              </li>
            </a>
            <a
              href={props.link_twitter}
              className="social-media-path"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="header-component-twitter-icon">
                <Icon icon="twitter" />
              </li>
            </a>
            <a
              href={props.link_instagram}
              className="social-media-path"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="header-component-instagram-icon">
                <Icon icon="instagram" />
              </li>
            </a>
            <a
              href={props.link_reddit}
              className="social-media-path"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="header-component-reddit-icon">
                <Icon icon="reddit" />
              </li>
            </a>
          </ul>
        </aside>
        <div className="header-component-description">
          <p>
            Hello and welcome to Cook Swap!!!! We are an all around recipe
            management site. With our services you will be able to view, share,
            and even create your own recipes.
          </p>
        </div>
      </header>
    </>
  )
}

export default Header
