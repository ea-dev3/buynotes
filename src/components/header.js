import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFab,
  IonFabButton,
  IonFabList,
  IonIcon,
  IonContent,
  IonMenu,
  IonList,
  IonItem,
  IonImg,
} from "@ionic/react"
import LogoSvg from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <>
    <IonHeader>
      <IonToolbar>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `1rem 1.0875rem`,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <IonTitle>
            <Link
              to="/"
              style={{
                color: `blue`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </IonTitle>
        </div>
      </IonToolbar>
    </IonHeader>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Buy Notes`,
}

export default Header
