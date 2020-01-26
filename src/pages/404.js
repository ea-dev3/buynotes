import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import NotFoundSvg from "../images/404.svg"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <img src={NotFoundSvg} alt="404" />
  </Layout>
)

export default NotFoundPage
