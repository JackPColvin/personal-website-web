import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "../../styles/styles.scss"
import sass from "./pane.module.scss"

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
      query PaneQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
        render={data => (
            <div>
                {/* Header */}
                <Pane>

                </Pane>
                {/* About */}
                <Pane>

                </Pane>
                {}
            </div>
        )}
    />
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout