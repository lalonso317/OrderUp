import React from "react"
import { Link } from "react-router-dom"
import Icon from "../../lib/Icon"
import Logo from "../../Assets/BnY-Logo-Transparent.png"
import { useAuth } from "../../hooks"
import "../../styles/home/footer.css"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share"
const Footer = props => {
  const { usernameEA } = useAuth()
  return (
    <aside>
      <aside className="footer-component">
        <aside className="footer-component-social-links">
          <div className="footer-component-social-media-icons">
            <a
              href={props.link_facebook}
              className="social-media-path"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="footer-component-facebook-icon">
                <Icon icon="facebook" />
              </div>
            </a>
            <a
              href={props.link_twitter}
              className="social-media-path"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="footer-component-twitter-icon">
                <Icon icon="twitter" />
              </div>
            </a>
            <a
              href={props.link_instagram}
              className="social-media-path"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="footer-component-instagram-icon">
                <Icon icon="instagram" />
              </div>
            </a>
            <a
              href={props.link_reddit}
              className="social-media-path"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="footer-component-reddit-icon">
                <Icon icon="reddit" />
              </div>
            </a>
          </div>
        </aside>

        <div className="footer-component-links">
          <Link
            className="footer-component-multiRecipe-button"
            to={"/all-recipes"}
          >
            <button className="fg">All Recipes</button>
          </Link>
        </div>
        <div className="footer-component-logo">
          <p>&copy;</p>
          <img className="logo" src={Logo} alt="our company logo" />
          <p>&trade;</p>
        </div>
      </aside>
    </aside>
  )
}

export default Footer
