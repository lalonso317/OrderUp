import React, { useState } from "react"
import { useUsers } from "../../hooks"
import Amplify from "aws-amplify"
import { Auth } from "aws-amplify"
import awsmobile from "../../aws-exports"
Amplify.configure(awsmobile)

const SignIn = props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [signedIn, setSignedIn] = useState(false)

  const { create, user } = useUsers()

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
    console.log(username)
  }
  if (signedIn) {
    return (
      <>
        <h1>You have signed in!</h1>
      </>
    )
  } else {
    return (
      <div>
        <form onSubmit={handleSignIn}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="username"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
          />
          <button type="submit">Sign In</button>
        </form>
      </div>
    )
  }
}
export default SignIn
