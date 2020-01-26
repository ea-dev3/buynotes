import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Construction from "../images/construction.svg"

// Material Ui
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/HomeWork"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />

    <img src={Construction} />
    <IconButton edge="start">
      <Link to="/">
        <MenuIcon color="primary" />
      </Link>
    </IconButton>
  </Layout>
)

export default SecondPage
