import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import ContentTable from "../app/components/ContentTable"

// Material Ui
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Chip from "@material-ui/core/Chip"
import Typography from "@material-ui/core/Typography"
import BookmarkIcon from "@material-ui/icons/Book"

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

export default function PageTemplate({ data: { mdx, allMdx } }) {
  const classes = useStyles()

  const notes = allMdx.edges

  console.log(notes)

  return (
    <>
      <Layout>
        <Navbar />
        <Paper variant="outlined" className={classes.paper} elevation={3}>
          <BookmarkIcon color="primary" />
          <ContentTable
            title={mdx.frontmatter.title}
            topic_1={`Introduction to ${mdx.frontmatter.title}`}
            topic_2={`Topic 2 of  ${mdx.frontmatter.title}`}
            subTopic_1Topic1="Sub Topic 1"
            subTopic_2Topic1="Sub Topic 2"
            subTopic_3Topic1="Sub Topic 3 "
            topic_3={`Topic 3 of  ${mdx.frontmatter.title}`}
            topic_4={`Topic 4 of  ${mdx.frontmatter.title}`}
          />
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
        tag
        published
      }
      fields {
        slug
      }
    }
    allMdx(limit: 10, skip: 10) {
      edges {
        node {
          id
          fields {
            slug
          }
        }
      }
    }
  }
`
