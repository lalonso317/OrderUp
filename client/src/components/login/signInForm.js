import React, { useState } from 'react'
import { Auth } from 'aws-amplify'

const SignIn = props =>{
const [ username, setUsername ] = useState('')
const [ password, setPassword ] = useState('')
const [ signedIn, setSignedIn ] = useState(false)

function handleSignIn(e){
    e.preventDefault()
        Auth.signIn({
            username: username,
            password: password
        })
        .then(() => console.log('signed up'))
        .catch(err => console.log(err))

        Auth.confirmSignIn(username)
        .then(()=> console.log('confirmed sign up'))
        .catch(err => console.log(err))

        setSignedIn(true)
        console.log(username)
 
}
    if(signedIn){
        return(
           <h1>You have signed in!</h1>
        )
    }else{
        return(
            <div>
                <form onSubmit={handleSignIn}>
                    <label>Username</label>
                    <input type='text' name='username' value={username} onChange={e => setUsername(e.target.value)} placeholder="username" />
                    <label>Password</label>
                    <input type='password' name='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        )
    }
}
export default SignIn