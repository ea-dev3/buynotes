import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AdsSvg from "../images/ads.svg"

// Material Ui
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/HomeWork"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    padding: theme.spacing(1),
    margin: theme.spacing(0),
  },
}))

export default function Ads() {
  const classes = useStyles()
  return (
    <>
      <Layout>
        <SEO title="Sponsered Ad" />
        <Paper className={classes.root}>
          <Typography variant="caption" color="primary">
            Sponsered ad
          </Typography>

          <img src={AdsSvg} alt="about" />
        </Paper>
      </Layout>
    </>
  )
}
