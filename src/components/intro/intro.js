import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import sass from './intro.module.scss'
import "animate.css/animate.min.css"

const Intro = ({ className }) => (
  <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "tile.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
          <BackgroundImage
            Tag="section"
            style={{
              width: "100vw",
              backgroundSize: "33% auto",
              backgroundAttachment: "fixed",
              backgroundRepeat: "1",
              display: "flex",
              flexDirection: "column"
            }}
            fluid={imageData}
          >
            <div className={sass.container}>
              <div></div>
              <div className={sass.nametagContainer}>
                <div className={sass.nametag}>
                  <p>Jack Colvin</p>
                </div>
              </div>
              <div></div>
              <div className={sass.nametagContainer}>
                <div className={sass.nametag}>
                  <p>Full Stack Software Developer</p>
                </div>
              </div>
              <div></div>
            </div>
          </BackgroundImage>
        )
      }
    }
  />
)

export default Intro