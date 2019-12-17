import React, { useState } from "react"
import { useAuth } from "../../hooks"
import { Link } from "react-router-dom"

export default function Login(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { signin } = useAuth()

  function handleSubmit(e) {
    e.preventDefault()

    signin(username, password)
      .then(() => {
        props.history.push("/")
      })
      .catch(err => {
        console.log("LOGIN ERROR - BAD PASSWORD", err)
      })
    setUsername("")
    setPassword("")
  }

  return (
    <div className="log-reg-container">
      <div className="formpage">
        <div className="formback ">
          <p className="textLogin">Login</p>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="user"
              placeholder="username"
              type="text"
              name="username"
              required
              value={username}
              onChange={e => setUsername(e.target.value)}
            ></input>
            <input
              className="pass"
              placeholder="password"
              type="password"
              name="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></input>
            <button className="sub" type="submit">
              Login
            </button>
          </form>
          <div className="newuser">
            <p className="areyou">Are you a new user, Register &#8594;</p>
            <button className="clickhere">
              <Link to={"/Register"}>
                <p className="click">Click here </p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
