import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// Material Ui
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/BookOutlined"

import LogoSvg from "../images/logo.svg"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <>
      <div
        className={classes.root}
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `1rem 1.0875rem`,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                {siteTitle}
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Buy Notes`,
}

export default Header
