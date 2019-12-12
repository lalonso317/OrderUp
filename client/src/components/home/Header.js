import React from "react"
import { Link } from "react-router-dom"
import Icon from "../../lib/Icon"
import TransLogo from "../../Assets/BnY-Logo-Transparent.png"
import "../../styles/home/Header.css"
import { useAuth } from "../../hooks/index"

const Header = props => {
  const { isAuthenticated, signout, usernameEA } = useAuth()
  console.log(usernameEA)
  const handleSignOut = e => {
    signout()
  }
  return (
    <div>
      {/* The Sticky Nav Bar */}
      {/* <header className="underNavbar">
        <img src={TransLogo} className="stickyLogo" alt="Our company logo" />
        <Link to="/" className="header-component-home-button">
          <p className="lg-u-u">
            <Icon icon="home" />
          </p>
        </Link>
        {isAuthenticated ? (
          ""
        ) : (
          <>
            <Link to="/login" className="header-component-login-button">
              <button className="lg-u">Login/Register</button>
            </Link>
          </>
        )}
        {isAuthenticated ? (
          <>
            <Link
              to="/create-your-recipe"
              className="header-component-create-recipe-button"
            >
              <button className="lg-u">Create A Recipe</button>
            </Link>
            <Link
              to={"/profile-page/" + username}
              className="header-component-profile-button"
            >
              <button className="lg-u">My Profile</button>
            </Link>{" "}
          </>
        ) : (
          " "
        )}
        <Link
          className="header-component-multiRecipe-button"
          to={"/all-recipes"}
        >
          <button className="lg-u">All Recipes</button>
        </Link>
      </header> */}
      {/* Main Header */}

      <header className="header-component-header">
        <div className="header">
          <img src={TransLogo} className="logo-top" alt="Our company logo" />
          <div className="header-links">
            <div className="header-component-description">
              <p>
                Welcome to OrderUp. We are an all around recipe management site.
                With our services you will be able to view, share, and even
                create your own recipes. Do not forget to create an account it's
                free!
              </p>
            </div>
            <div className="links-to-components">
              <Link to="/" className="header-component-home-button">
                <p className="social-media-path">
                  <Icon icon="home" />
                </p>
              </Link>
              {isAuthenticated ? (
                <>
                  <Link
                    to="/create-your-recipe"
                    className="header-component-create-recipe-button"
                  >
                    <button className="lg">Create A Recipe</button>
                  </Link>
                  <Link
                    to={"/profile-page/" + usernameEA}
                    className="header-component-profile-button"
                  >
                    <button className="lg">My Profile</button>
                  </Link>{" "}
                </>
              ) : (
                " "
              )}
              <Link
                className="header-component-multiRecipe-button"
                to={"/all-recipes"}
              >
                <button className="lg">All Recipes</button>
              </Link>
              <Link
                className="header-component-multiRecipe-button"
                to={"/about-us"}
              >
                <button className="lg">About</button>
              </Link>
              <Link
                className="header-component-multiRecipe-button"
                to={"/about-the-devs"}
              >
                <button className="lg">Meet the Devs</button>
              </Link>
            </div>
          </div>
          <div className="headerSticky">
            <div className="allUserHeader">
              <h3 className="usernameHeader">{usernameEA}</h3>
              {isAuthenticated ? (
                <button
                  onClick={e => handleSignOut(e)}
                  className="header-component-sign-out-button"
                >
                  Sign Out
                </button>
              ) : (
                <>
                  <Link to="/login" className="header-component-login-button">
                    <button className="lg">Login</button>
                  </Link>
                </>
              )}
            </div>
            <aside className="header-component-social-links">
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
            </aside>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
