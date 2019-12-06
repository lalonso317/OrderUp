import React, { useState } from "react"
import CreateSignUp from "./signUpForm"
import SignInForm from "./signInForm"

const Toggle = props => {
  const [userSignedup, setUserSignedUp] = useState(false)
  const [log, setLog] = useState(false)

  function handleToggle() {
    setUserSignedUp(!userSignedup)
    setLog(!log)
  }
  return (
    <>
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
