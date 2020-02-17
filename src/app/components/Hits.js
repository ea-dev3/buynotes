import React from "react"
import {
  connectHits,
  Highlight,
  CurrentRefinements,
  RefinementList,
  Snippet,
  Configure,
  PoweredBy,
} from "react-instantsearch-dom"
import BookIcon from "@material-ui/icons/BookOutlined"

// Material Ui

import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Chip from "@material-ui/core/Chip"
import Divider from "@material-ui/core/Divider"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    paper: {
      backgroundColor: "transparent",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      flexDirection: "column",
      padding: theme.spacing(1),
    },
    excerpt: {
      backgroundColor: "#fff",
    },
    searchFooter: {
      display: "flex",
      flexDirection: "row",
    },
    chip: {
      padding: theme.spacing(1),
    },
  },
}))

const Hits = ({ hits }) => {
  const classes = useStyles()

  return (
    <div>
      <>
        {hits.map(hit => (
          <Paper
            square
            elevation={0}
            key={hit.objectID}
            className={classes.paper}
          >
            <Typography variant="body2">
              <Highlight attribute="excerpt" hit={hit} tagName="mark">
                {hit.excerpt}
              </Highlight>
            </Typography>

            <Divider variant="middle" />

            <Chip
              label={hit.frontmatter.tag}
              color="primary"
              size="small"
              icon={<BookIcon fontSize="inherit" />}
              className={classes.chip}
            />
            <br />
          </Paper>
        ))}
      </>
    </div>
  )
}

export const NotesHits = connectHits(Hits)
