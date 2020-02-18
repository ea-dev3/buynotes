import React from "react"
import { Link } from "gatsby"

// Material Ui

import { makeStyles } from "@material-ui/core/styles"
import ButtonBase from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"
import Badge from "@material-ui/core/Badge"
import BookmarkIcon from "@material-ui/icons/BookOutlined"

import { Paper } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
  },
  image: {
    position: "relative",
    marginBottom: theme.spacing(2),
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.25,
      },
      "& $imageMarked": {
        opacity: 0.5,
      },
      "& $imageTitle": {
        border: "1px solid currentColor",
        backgroundColor: "#3f51b5",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 0%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.6,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(0)}px ${theme.spacing(0)}px ${theme.spacing(0) +
      0}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    color: "transparent",
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
  badge: {
    position: "absolute",
    left: 0,
    right: "calc(50% - 5px)",
    top: "calc(10% - 4px)",
    bottom: 0,
  },
  paper: {
    backgroundColor: "transparent",
    color: "white",
    paddingTop: theme.spacing(0),
    paddingLeft: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: "flex",
  },
  imageSpan: {
    color: "white",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  bookIcon: {
    paddingRight: theme.spacing(0),
    marginBottom: theme.spacing(0),
  },
}))

export default function NoteCard({ defaultProps, title, src, link, chapters }) {
  const classes = useStyles()

  return (
    <>
      <ButtonBase
        focusRipple
        className={classes.image}
        focusVisibleClassName={classes.focusVisible}
        style={{
          width: "98%",
        }}
      >
        <Badge
          badgeContent={chapters}
          {...defaultProps}
          color="primary"
          className={classes.badge}
        />

        <span
          className={classes.imageSrc}
          style={{
            backgroundImage: `url(${src})`,
          }}
        />
        <span className={classes.imageBackdrop} />
        <span className={classes.imageButton}>
          <>
            <Link
              style={{
                color: `transparent`,
                textDecoration: `none`,
              }}
              to={link}
            >
              <Paper elevation={0} className={classes.paper} square>
                <BookmarkIcon
                  fontSize="small"
                  color="primary"
                  className={classes.bookIcon}
                />
                <Typography
                  component="span"
                  variant="subtitle2"
                  color="inherit"
                  className={classes.imageTitle}
                  color="primary"
                >
                  <span className={classes.imageSpan}>{title}</span>
                </Typography>
              </Paper>
            </Link>
          </>
        </span>
      </ButtonBase>
    </>
  )
}
