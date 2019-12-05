import React, { useState } from "react"
import Amplify from "aws-amplify"
import { Auth } from "aws-amplify"
import awsmobile from "../../aws-exports"
Amplify.configure(awsmobile)

const CreateSignUp = props => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [signedUp, setSignedUp] = useState(false)
  const [confirmationCode, setConfirmationCode] = useState("")

  function handleSignUp(e) {
    e.preventDefault()

    if (!signedUp) {
      Auth.signUp({
        username: username,
        password: password,
        attributes: {
          email: email
        }
      })
        .then(() => console.log("signed up"))
        .catch(err => console.log(err))

      setSignedUp(true)
    } else {
      Auth.confirmSignUp(username, confirmationCode)
        .then(() => console.log("confirmed sign up"))
        .catch(err => console.log(err))
    }
  }
  if (signedUp) {
    return (
      <form>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder="username"
        />
        <label>Confirmation Code</label>
        <input
          type="text"
          name="confirmationCode"
          value={confirmationCode}
          onChange={e => setConfirmationCode(e.target.value)}
          placeholder="confirmation"
        />
        <button>Confirm</button>
      </form>
    )
  } else {
    return (
      <div className="loginBody">
        <form onSubmit={handleSignUp}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder="username"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="email"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    )
  }
}
export default CreateSignUp
