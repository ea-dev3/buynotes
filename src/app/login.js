import React from "react"
import { navigate } from "gatsby"

import LoginSvg from "../images/login.svg"

import {
  IdentityModal,
  useIdentityContext,
} from "react-netlify-identity-widget"
import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS

function Login() {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  return (
    <>
      <img src={LoginSvg}></img>
      <button onClick={() => setDialog(true)}>Log In</button>

      <IdentityModal
        showDialog={dialog}
        onCloseDialog={() => setDialog(false)}
        onLogin={user => navigate("/app/profile")}
        onSignup={user => navigate("/app/profile")}
      />
    </>
  )
}

export default Login
