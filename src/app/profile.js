import React from "react"

// Material Ui
import Badge from "@material-ui/core/Badge"
import Avatar from "@material-ui/core/Avatar"
import { makeStyles, withStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Chip from "@material-ui/core/Chip"
import SchoolIcon from "@material-ui/icons/SchoolOutlined"

import SchoolSvg from "../images/school.svg"

import { useIdentityContext } from "react-netlify-identity-widget"

const StyledBadge = withStyles(theme => ({
  badge: {
    backgroundColor: "#44b700",
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
              />
            </StyledBadge>
          </div>
          <h6> {user.user_metadata && user.user_metadata.full_name}</h6>
        </div>
        <img src={SchoolSvg} height="50%" width="50%"></img>
      </Paper>
    </>
  )
}

export default Profile
