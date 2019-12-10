import React from "react"
import Icon from "../../lib/Icon"
import Logo from "../../Assets/BnY-Logo-Transparent.png"
import "../../styles/home/footer.css"
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon
} from "react-share"
const Footer = props => {
  return (
    <div>
      <div className="footer-component">
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
            <FacebookShareButton
              // href={"http://localhost:3000/"}
              url={"https://finediningsite.surge.sh/"}
              children={<FacebookIcon size={30} round={true} />}
            />
            <TwitterShareButton
              url={"http://localhost:3000/"}
              children={<TwitterIcon size={30} round={true} />}
            />
          </div>
        </aside>
        <div className="footer-component-logo">
          <p>&copy;</p>
          <img className="logo" src={Logo} alt="our company logo" />
          <p>&trade;</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
