import React from "react"
import { useAuth } from "../../hooks/index"
import Protected from "./unprotectedRoutes"
import Toggle from "../login/toggle"

const Routes = () => {
  const { isAuthenticated } = useAuth()

  return (
    <div>
      {isAuthenticated} ? <Protected />:{" "}
      <Redirect>
        <Toggle />
      </Redirect>
    </div>
  )
}

export default Routes
