import React from "react"
import { Route, Switch } from "react-router-dom"
import Login from "./loginForm"
import Register from "./registerForm"

const Toggle = () => {
  return (
    <Route>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/Register" component={Register} />
      </Switch>
    </Route>
  )
}

export default Toggle
