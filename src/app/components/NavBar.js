import React from "react"
import { Link, navigate } from "gatsby"

import { useIdentityContext } from "react-netlify-identity-widget"

// Material Ui

import { makeStyles } from "@material-ui/core/styles"

import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import HomeIcon from "@material-ui/icons/HomeOutlined"
import ProfileIcon from "@material-ui/icons/PersonOutline"
import LoginIcon from "@material-ui/icons/ArrowDownwardOutlined"
import LogOutIcon from "@material-ui/icons/ArrowUpwardOutlined"

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    color: "white",
    textDecoration: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonGroup: {
    marginBottom: theme.spacing(2),
  },
}))

export default () => {
  const { user, isLoggedIn, logoutUser } = useIdentityContext()
  let message = isLoggedIn
    ? `Hello, ${user.user_metadata && user.user_metadata.full_name}`
    : "You are not logged in"

  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <div className={classes.root}>
        <ButtonGroup
          color="primary"
          aria-label="outlined primary button group"
          variant="contained"
          className={classes.ButtonGroup}
          size="small"
        >
          <Button>
            <Link className={classes.button} to="/app/">
              <HomeIcon fontSize="inherit" />
              Main
            </Link>
          </Button>

          <Button>
            <Link className={classes.button} to="/app/profile">
              <ProfileIcon fontSize="inherit" />
              Profile
            </Link>
          </Button>

          <Button>
            {isLoggedIn ? (
              <a
                className={classes.button}
                href="/"
                onClick={async event => {
                  event.preventDefault()
                  await logoutUser()
                  navigate(`/app/login`)
                }}
              >
                <LogOutIcon fontSize="inherit" />
                Out
              </a>
            ) : (
              <Link className={classes.button} to="/app/login">
                <LoginIcon fontSize="inherit" />
              </Link>
            )}
          </Button>
        </ButtonGroup>

        <div
          style={
            {
              /*
          display: "flex",
          flex: "1",
          justifyContent: "space-between",
          borderBottom: "1px solid #d1c1e0",
          backgroundColor: "aliceblue",
        */
            }
          }
        >
          <span>{/*message*/}</span>
        </div>
        <>
          {/** 
          <span> </span>
          
          <Link to="/app/">Main</Link>
          
          {` `}

          <Link to="/app/profile">Profile</Link>

           * 
           * 
          
           * */}
        </>
      </div>
    </>
  )
}
