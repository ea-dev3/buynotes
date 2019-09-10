import React from "react"
import { navigate } from "gatsby"

import {
  IdentityModal,
  useIdentityContext,
} from "react-netlify-identity-widget"

function Login() {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  return (
    <>
      <h1>Log in</h1>
      <button onClick={() => setDialog(true)}>log in</button>

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
