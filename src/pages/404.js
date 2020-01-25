import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { IonImg, IonContent } from "@ionic/react"
import NotFoundSvg from "../images/404.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <IonImg src={NotFoundSvg} />
  </Layout>
)

export default NotFoundPage
