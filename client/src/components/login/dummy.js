import React from 'react'
import Amplify from 'aws-amplify'
import awsmobile from '../../aws-exports'
import { withAuthenticator } from 'aws-amplify-react'
Amplify.configure(awsmobile)

const Login = props =>{
    return(
        <div>
            <h1>HELLO</h1>
        </div>
    )
}
export default withAuthenticator(Login, {
    signUpConfig: {

      hiddenDefaults: ["phone_number"],
      signUpFields: [
        { label: "Name", key: "name", required: true, type: "string" }

      ]
}}) 

 