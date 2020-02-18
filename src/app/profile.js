import React from "react"

// Material Ui
import Badge from "@material-ui/core/Badge"
import Avatar from "@material-ui/core/Avatar"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import SchoolSvg from "../images/qoutes.svg"
import LeftQuoteIcon from "@material-ui/icons/FormatQuote"
import AvatarIcon from "@material-ui/icons/Person"

import { useIdentityContext } from "react-netlify-identity-widget"

const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: "#3f51b5",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge)

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  paper: {
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: theme.spacing(1),
  },
  qoute: {
    padding: theme.spacing(1),
  },
  name: {
    color: "#3f51b5",
  },
}))

const Profile = () => {
  const { user } = useIdentityContext()
  const classes = useStyles()
  return (
    <>
      <Paper variant="outlined" elevation={3} className={classes.container}>
        <div className={classes.container}>
          <div className={classes.root}>
            <StyledBadge
              overlap="circle"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              variant="dot"
            >
              <Avatar
                alt={user.user_metadata && user.user_metadata.full_name}
                src="../images/gatsby-astronaut.png"
              >
                <AvatarIcon />
              </Avatar>
            </StyledBadge>
          </div>
          <h6 className={classes.name}>
            {" "}
            {user.user_metadata && user.user_metadata.full_name}
          </h6>
        </div>
        <Paper elevation={0} square className={classes.paper}>
          <LeftQuoteIcon color="primary" />
          <Typography variant="caption" className={classes.qoute}>
            The important thing is to not stop questioning. Curiosity has its
            own reason for existing.
          </Typography>
          <LeftQuoteIcon color="primary" />
        </Paper>
        <Paper elevation={0} square className={classes.paper}>
          <Typography variant="caption" color="primary">
            - Albert Einstein -
          </Typography>
        </Paper>
        <img src={SchoolSvg} height="50%" width="50%"></img>
      </Paper>
    </>
  )
}

export default Profile
