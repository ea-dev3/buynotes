import React from "react"
import { navigate } from "gatsby"

import LoginSvg from "../images/login.svg"

// Material Ui
import { makeStyles } from "@material-ui/core/styles"
import NavigationIcon from "@material-ui/icons/Navigation"
import Fab from "@material-ui/core/Fab"
import Paper from "@material-ui/core/Paper"

import {
  IdentityModal,
  useIdentityContext,
} from "react-netlify-identity-widget"
// import "react-netlify-identity-widget/styles.css" // delete if you want to bring your own CSS
import "./login.css"

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  image: {
    padding: theme.spacing(3),
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: "50",
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  paper: {
    backgroundColor: "transparent",
    flexWrap: "wrap",
    padding: theme.spacing(3),
  },
  fab: {
    marginBottom: theme.spacing(1),
  },
}))

function Login() {
  const identity = useIdentityContext()
  const [dialog, setDialog] = React.useState(false)
  const classes = useStyles()

  return (
    <>
      <Paper variant="outlined" className={classes.paper} elevation={3}>
        <img src={LoginSvg} height="50%" width="50%"></img>
        <Fab
          onClick={() => setDialog(true)}
          variant="extended"
          aria-label="login"
          color="primary"
          size="large"
          className={classes.fab}
        >
          <NavigationIcon className={classes.extendedIcon} fontSize="inherit" />
          LOGIN
        </Fab>

        <IdentityModal
          showDialog={dialog}
          onCloseDialog={() => setDialog(false)}
          onLogin={user => navigate("/app/profile")}
          onSignup={user => navigate("/app/profile")}
        />
      </Paper>
    </>
  )
}

export default Login
