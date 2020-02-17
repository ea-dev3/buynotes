import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import ButtonBase from "@material-ui/core/ButtonBase"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import AdIcon from "@material-ui/icons/LabelImportantOutlined"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
    backgroundColor: "transparent",
    paddingRight: theme.spacing(0),
    marginRight: theme.spacing(0),
  },
  image: {
    position: "relative",
    marginBottom: theme.spacing(0),
    marginRight: theme.spacing(0),
    height: 178,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.55,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
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
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
    display: "none",
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
    opacity: 0.3,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) +
      6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
  paperRoot: {
    width: "100%",
    padding: theme.spacing(0),
    margin: theme.spacing(0),
  },
  advert: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
}))

export default function AdsCard({ route, src, link }) {
  const classes = useStyles()

  return (
    <>
      <Paper className={classes.root} elevation={0} square>
        <Typography
          variant="caption"
          color="primary"
          className={classes.advert}
        >
          <AdIcon fontSize="inherit" /> Sponsered Advert
        </Typography>
        <ButtonBase
          focusRipple
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "98%",
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${src})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              <Link
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
                to={link}
              >
                <span>{route}</span>
              </Link>
              <span className={classes.imageMarked} />
            </Typography>
          </span>
        </ButtonBase>
      </Paper>
    </>
  )
}
