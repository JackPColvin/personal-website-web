import React from "react";
import { graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import sass from './contact.module.scss'

export default ({ className,data }) => (
    <StaticQuery query={graphql`
      query {
        contact: file(relativePath: { eq: "contactParallax.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 3840) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
        render={data => {
            // Set ImageData.
            const imageData = data.contact.childImageSharp.fluid
            return (
                <BackgroundImage Tag="section"
                    style={{
                        width: "100vw",
                        backgroundAttachment: "fixed",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    }}
                    fluid={imageData}
                >
                    <div className={sass.parallax}>
                        <div className={sass.pane}>
                            <div className={sass.entry}>
                                <div className={sass.textTitle}>Let's Talk.</div>
                            </div>
                            <div>
                                <div className={sass.textInfo}>Email: jackcolvin@outlook.com</div>
                                <div className={sass.textInfo}>Phone: (705)-896-3119</div>
                            </div>
                        </div>
                    </div>
                </BackgroundImage>
            )
        }
        }
    />
)