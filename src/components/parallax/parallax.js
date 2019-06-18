import React from "react"
import sass from './parallax.module.scss'
import Bitmoji from "../../images/bitmoji.png"
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"
import BackgroundImage from 'gatsby-background-image'
import {graphql, StaticQuery} from "gatsby"

const Parallax = ({ className,data }) => (
  <StaticQuery query={graphql`
    query{
      firewatch: file(relativePath: {eq: "firewatch.jpg"}){
        childImageSharp{
          fluid(quality:90, maxWidth: 1920){
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }`}
    render={data => {
      const imageData = data.firewatch.childImageSharp.fluid
      return(
        <BackgroundImage Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          < div className={sass.parallax} >
            <ScrollAnimation
              className={sass.funFacts}
              animateIn="fadeIn"
              animateOut="fadeOut"
              offset={0}
              delay={100}
            >
              <p className={sass.title}>
                Aside from quality time in nature, there's nothing I enjoy more than
        building software. <br /> <br />
                Below, you can find some of my projects and a summary of my education.{" "}
                <br />
              </p>
            </ScrollAnimation>
            <ScrollAnimation
              className={sass.bitmoji}
              animateIn="fadeIn"
              animateOut="fadeOut"
              offset={0}
              delay={100}
            >
              <img src={Bitmoji} className={sass.bitmojiImage} alt="" />
            </ScrollAnimation>
          </div >
        </BackgroundImage>
      )
    }}
  />

);

export default Parallax


