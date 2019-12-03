import React from "react"
import Icon from "../../lib/Icon"
import "../../styles/home/Header.css"

const Header = props => {
  return (
    <header className="header-component-header">
      <h1 className="header-component-title">Cook Swap</h1>
      <Icon icon="book" />
      <aside className="header-component-social-links">
        <ul className="header-component-social-media-icons">
          <a href={props.link_facebook} className="social-media-path" target="_blank" rel="noopener noreferrer">
            <li className="header-component-facebook-icon">
              <Icon icon="facebook" />
            </li>
          </a>
          <a href={props.link_twitter} className="social-media-path" target="_blank" rel="noopener noreferrer">
            <li className="header-component-twitter-icon">
              <Icon icon="twitter" />
            </li>
          </a>
          <a href={props.link_instagram} className="social-media-path" target="_blank" rel="noopener noreferrer">
            <li className="header-component-instagram-icon">
              <Icon icon="instagram" />
            </li>
          </a>
          <a href={props.link_reddit} className="social-media-path" target="_blank" rel="noopener noreferrer">
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
  )
}

export default Header
