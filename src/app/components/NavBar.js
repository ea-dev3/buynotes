import React from "react"
import { Link, navigate } from "gatsby"

import { IonSegment, IonSegmentButton, IonLabel } from "@ionic/react"

import { useIdentityContext } from "react-netlify-identity-widget"

export default () => {
  const { user, isLoggedIn, logoutUser } = useIdentityContext()
  let message = isLoggedIn
    ? `Hello, ${user.user_metadata && user.user_metadata.full_name}`
    : "You are not logged in"

  return (
    <>
      <IonSegment
        onIonChange={e => console.log("Segment selected", e.detail.value)}
      >
        <div
          style={{
            display: "flex",
            flex: "1",
            justifyContent: "space-between",
            borderBottom: "1px solid #d1c1e0",
            backgroundColor: "aliceblue",
          }}
        >
          <span>{/*message*/}</span>

          <>
            <span> </span>
            <IonSegmentButton value="friends">
              <IonLabel>
                <Link to="/app/">Main</Link>
              </IonLabel>
            </IonSegmentButton>
            {` `}
            <IonSegmentButton>
              <Link to="/app/profile">Profile</Link>
            </IonSegmentButton>
            {` `}
            {isLoggedIn ? (
              <IonSegmentButton>
                <a
                  href="/"
                  onClick={async event => {
                    event.preventDefault()
                    await logoutUser()
                    navigate(`/app/login`)
                  }}
                >
                  Logout
                </a>
              </IonSegmentButton>
            ) : (
              <IonSegmentButton>
                <Link to="/app/login">Login</Link>
              </IonSegmentButton>
            )}
          </>
        </div>
      </IonSegment>
    </>
  )
}
