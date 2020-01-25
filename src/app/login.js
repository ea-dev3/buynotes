import React from "react"
import { navigate } from "gatsby"
import { IonButton, IonIcon, IonContent, IonImg } from "@ionic/react"
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
      <IonImg src={LoginSvg}></IonImg>
      <IonButton
        size="small"
        expand="full"
        fiil="clear"
        onClick={() => setDialog(true)}
      >
        Log In
      </IonButton>

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
