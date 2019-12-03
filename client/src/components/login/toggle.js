import React, { useState } from 'react'
import CreateSignUp from './signUpForm'
import SignIn from './signInForm'

export default function Toggle(props){
const [ userSignedup, setUserSignedUp] = useState(false)
const [ log, setLog ] = useState(false)

function handleToggle(){
  setUserSignedUp(!userSignedup)
  setLog(!log)
}
    return(
        <div>
            <button onClick={handleToggle}>{!log ? 'Register' : 'Login'}</button>
            { userSignedup ? <CreateSignUp /> : <SignIn/> }
        </div>
    )
}