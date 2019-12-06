import React, { useState } from "react"
import { Link } from "react-router-dom"
import { usePosty } from "../../hooks"

export default function Register(props) {
  const [username, SetUsername] = useState("")
  const [password, SetPassword] = useState("")
  const [email, SetEmail] = useState("")
  const { create } = usePosty()

  function handleSubmit(e) {
    e.preventDefault()

    create(username, email, password).then(() => {
      props.history.push("/Login")
    })
  }
  return (
    <div>
      <div className="wholereg">
        <div className="formbackReg">
          <h2 className="textLogin">Register</h2>
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="user"
              type="text"
              placeholder="username"
              required
              value={username}
              onChange={e => SetUsername(e.target.value)}
            ></input>
            <input
              className="pass"
              type="email"
              placeholder="email"
              required
              value={email}
              onChange={e => SetEmail(e.target.value)}
            ></input>
            <input
              className="pass"
              type="password"
              placeholder="password"
              required
              value={password}
              onChange={e => SetPassword(e.target.value)}
            ></input>
            <button className="sub" type="submit">
              {" "}
              Submit
            </button>
          </form>
          <div className="newuser">
            <p className="areyou">Already a user, Login &#8594;</p>
            <button className="clickhere">
              <Link to={"/Login"}>
                <p className="clickhere">Click here </p>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
