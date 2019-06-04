import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import sass from './header.module.scss'

const Header = ({ siteTitle }) => (
  // Header root
  <header className={sass.headerContainer}>
    {/* Site Title */}
    <div className={sass.siteTitleContainer}>
      <h1>
        <Link to="/" className={sass.siteTitle}>
          {siteTitle}
        </Link>
      </h1>
    </div>
    {/* Page Navigation */}
    <div className={sass.navContainer}>
      <h3>
        <Link to="/" className={sass.navElement}>Home</Link>
      </h3>
      <h3>
        <Link to="/contact" className={sass.navElement}> Contact Me </Link>
      </h3>
      <h3>
        <Link to="/about" className={sass.navElement}>About Me</Link>
      </h3>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
