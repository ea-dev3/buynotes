import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

import NoteCard from "./components/NoteCard"
import NotesSvg from "../images/notes.svg"

// Material Ui
import Paper from "@material-ui/core/Paper"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    backgroundColor: "transparent",
    flexWrap: "wrap",
    padding: theme.spacing(0),
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
  },
  link: {
    textDecoration: "none",
    cursor: "pointer",
  },
}))

const NotesPage = props => {
  const classes = useStyles()
  return (
    <StaticQuery
      query={graphql`
        query NoteslistQuery {
          allMdx(
            sort: { fields: [frontmatter___title], order: ASC }
            filter: { frontmatter: { published: { eq: true } } }
            limit: 100
          ) {
            pageInfo {
              currentPage
              pageCount
            }
            nodes {
              id
              timeToRead
              excerpt
              frontmatter {
                title
              }
              fields {
                slug
                readingTime {
                  text
                }
              }
            }
          }
        }
      `}
      render={data => (
        <>
          {data.allMdx.nodes.map(
            ({ id, excerpt, frontmatter, fields, timeToRead }) => (
              <NoteCard
                key={id}
                title={frontmatter.title}
                chapters={fields.readingTime.text}
                src={NotesSvg}
                link={fields.slug}
              />
            )
          )}
          {/*
            <Paper elevation={0} square className={classes.paper}>
              <Pagination
                count={5}
                color="primary"
                variant="outlined"
                shape="rounded"
                defaultPage={1}
                renderItem={data => (
                  <PaginationItem
                    component={Link}
                    to={
                      data.allMdx.pageInfo.currentPage - 1 === 1
                        ? "/app/"
                        : `/app/${(
                            data.allMdx.pageInfo.currentPage - 1
                          ).toString()}`
                    }
                    {...data}
                  />
                )}
              />
            </Paper>
                  */}
          {
            <Paper elevation={0} square className={classes.paper}>
              {!data.allMdx.pageInfo.currentPage === 1 && (
                <Typography variant="h6" color="primary">
                  <Link
                    className={classes.link}
                    to={
                      data.allMdx.pageInfo.currentPage - 1 === 1
                        ? "/app/"
                        : `/app/${(
                            data.allMdx.pageInfo.currentPage - 1
                          ).toString()}`
                    }
                  >
                    ← Prev
                  </Link>
                </Typography>
              )}
              <Typography variant="h6" color="primary">
                {data.allMdx.pageInfo.currentPage}
              </Typography>
              {data.allMdx.pageInfo.currentPage === 1 && (
                <Typography variant="h6" color="primary">
                  <Link
                    className={classes.link}
                    to={`/app/${(
                      data.allMdx.pageInfo.currentPage + 1
                    ).toString()}`}
                  >
                    Next →
                  </Link>
                </Typography>
              )}
            </Paper>
          }
        </>
      )}
    />
  )
}

export default NotesPage
