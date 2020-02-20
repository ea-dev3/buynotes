import React from "react"
import { Link, navigate } from "gatsby"

import { useIdentityContext } from "react-netlify-identity-widget"

import Search from "../components/Search"

// Material Ui

import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import HomeIcon from "@material-ui/icons/Home"
import ProfileIcon from "@material-ui/icons/Person"
import LoginIcon from "@material-ui/icons/ArrowDownwardOutlined"
import LogOutIcon from "@material-ui/icons/ArrowUpwardOutlined"
import QuestionsIcon from "@material-ui/icons/QuestionAnswer"

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
      {isLoggedIn ? <Search /> : ""}

      <div className={classes.root}>
        <ButtonGroup
          color="primary"
          aria-label="outlined primary button group"
          variant="text"
          className={classes.ButtonGroup}
          size="small"
          fullWidth="true"
        >
          <Button>
            <Link className={classes.button} to="/app/" color="primary">
              <HomeIcon fontSize="10" color="primary" />
              <Typography variant="caption" color="primary">
                Main
              </Typography>
            </Link>
          </Button>

          <Button>
            <Link
              className={classes.button}
              to="/app/questions"
              color="primary"
            >
              <QuestionsIcon fontSize="10" color="primary" />
              <Typography variant="caption" color="primary">
                Q n A
              </Typography>
            </Link>
          </Button>

          <Button>
            <Link className={classes.button} to="/app/profile" color="primary">
              <ProfileIcon fontSize="10" color="primary" />
              <Typography variant="caption" color="primary">
                Profile
              </Typography>
            </Link>
          </Button>

          <Button>
            {isLoggedIn ? (
              <Link
                className={classes.button}
                href="/"
                onClick={async event => {
                  event.preventDefault()
                  await logoutUser()
                  navigate(`/app/login`)
                }}
                color="primary"
              >
                <LogOutIcon fontSize="10" color="primary" />
                <Typography variant="caption" color="primary">
                  Out
                </Typography>
              </Link>
            ) : (
              <Link className={classes.button} to="/app/login">
                <LoginIcon fontSize="10" color="primary" />
              </Link>
            )}
          </Button>
        </ButtonGroup>
      </div>
    </>
  )
}
