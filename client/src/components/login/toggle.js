import React, { useState } from "react"
import CreateSignUp from "./signUpForm"
import SignIn from "./signInForm"

export default function Toggle(props) {
  const [userSignedup, setUserSignedUp] = useState(false)
  const [log, setLog] = useState(false)

  function handleToggle() {
    setUserSignedUp(!userSignedup)
    setLog(!log)
  }
  return (
    <div className="toggleMain">
      <button onClick={handleToggle}>
        {!log ? "Click to Register" : "Click to Login"}
      </button>
      {userSignedup ? <CreateSignUp /> : <SignIn />}
    </div>
  )
}
