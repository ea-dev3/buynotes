import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

// Material Ui
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"

import Header from "./header"
import Navbar from "../app/components/NavBar"
import Layout from "../components/layout"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    backgroundColor: "transparent",
    flexWrap: "wrap",
    padding: theme.spacing(3),
  },
}))

export default function PageTemplate({ data: { mdx } }) {
  const classes = useStyles()

  return (
    <>
      <Layout>
        <Navbar />
        <Paper variant="outlined" className={classes.paper} elevation={3}>
          <h2>{mdx.frontmatter.title}</h2>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Paper>
      </Layout>
    </>
  )
}
export const notesQuery = graphql`
  query NotesPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`
