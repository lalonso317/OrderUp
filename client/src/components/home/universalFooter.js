import React from "react"
import Icon from "../../lib/Icon"
import Logo from "../../Assets/order-up-logo.png"
import "../../styles/home/footer.css"

const Footer = props => {
  return (
    <div className="footer-component-container">
      <aside>
        <div className="footer-icon-and-logo-container">
          <img src={Logo} className="footer-logo" alt="" />
          <aside className="footer-component-social-links">
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
                <Icon icon="reddit"  />
              </div>
            </a>
          </aside>
        </div>
      </aside>
    </div>
  )
}

export default Footer
