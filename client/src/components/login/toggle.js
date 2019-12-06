import React, { useState } from "react"
import CreateSignUp from "./signUpForm"
import SignInForm from "./signInForm"
import Header from "../home/Header"

const Toggle = props => {
  const [userSignedup, setUserSignedUp] = useState(false)
  const [log, setLog] = useState(false)

  function handleToggle() {
    setUserSignedUp(!userSignedup)
    setLog(!log)
  }
  return (
    <>
      <Header
        link_twitter="https://twitter.com/?lang=en"
        link_facebook="https://www.facebook.com/"
        link_reddit="https://www.reddit.com/"
        link_instagram="https://www.instagram.com/"
      />
      <div className="toggleMain">
        {userSignedup ? <CreateSignUp /> : <SignInForm />}
        <button className="toggleLogin" onClick={handleToggle}>
          {!log ? "Click to Register" : "Click to Login"}
        </button>
      </div>
    </>
  )
}


export default Toggle