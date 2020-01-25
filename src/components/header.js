import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import LogoSvg from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1.0875rem`,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link
        to="/"
        style={{
          color: `blue`,
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </div>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Buy Notes`,
}

export default Header
