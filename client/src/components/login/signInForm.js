import React, { useState } from "react"
import { useUsers } from "../../hooks"
import Logo from "../../Assets/Logo.png"
import Amplify from "aws-amplify"
import { Auth } from "aws-amplify"
import awsmobile from "../../aws-exports"
import { Redirect } from "react-router-dom"
Amplify.configure(awsmobile)

const SignInForm = props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signedIn, setSignedIn] = useState(false)

  const { create } = useUsers()

  function handleSignIn(e) {
    e.preventDefault()

    create(username)

    Auth.signIn({
      username: username,
      password: password
    })
      .then(() => console.log("signed in"))
      .catch(err => console.log(err))

    Auth.confirmSignIn(username)
      .then(() => console.log("confirmed sign in"))
      .catch(err => console.log(err))

    setSignedIn(true)
  }
  if (signedIn) {
    return <Redirect to="/"></Redirect>
  } else {
    return (
      <div className="loginBody">
        <div>
          <img src={Logo} />
        </div>
        <form onSubmit={handleSignIn}>
          <div className="loginForm">
            <label className="loginUsername">Username</label>
            <input
              className="inputLoginUsername"
              type="text"
              name="username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="username"
            />
            <label className="loginUsername">Password</label>
            <input
              className="inputLoginUsername"
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="password"
            />
            <button className="signInButton" type="submit">
              Sign In
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default SignInForm
