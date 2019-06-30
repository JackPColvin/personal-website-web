import React from "react"
import sass from './education.module.scss'
import Img from "gatsby-image"
import ScrollAnimation from 'react-animate-on-scroll'


class Education extends React.Component{
    constructor(props){
        super(props)
        // console.log(props)
        this.state = {
            grad: props.logo
        }
    }
    render() {
        // console.log(this)
        return (
          <div className={sass.pane}>
            <div className={sass.top} />
            <div className={sass.middle}>
              <div className={sass.middleLogos}>
                <div className={sass.uogLogoContainer}>
                    <Img
                        className={sass.uogLogo}
                        fluid={this.state.grad.childImageSharp.fluid}
                    />
                </div>
              </div>
              <ScrollAnimation
                animateIn="zoomIn"
                animateOut="zoomOut"
                animateOnce={false}
                offset={100}
                delay={100}
                className={sass.middleText}
              >
                <p>
                  Jack graduated with honour's from the University of Guelph in
                  2019, earning a degree in Computer Science and a minor in
                  Economics.
                </p>
                <p>
                  Jack was awarded University of Guelph's Department of
                  Economics and Finance Fourth Year Writing prize. The winning essay is  
                  available{" "}
                  <a href="https://jcolvin-personal-static-files.s3.ca-central-1.amazonaws.com/Essay.pdf">
                    here
                  </a>
                  .
                </p>
                <p>
                  His academic standing allows him to pursue a Master's degree
                  in the future. His unofficial transcript is available{" "}
                  <a href="https://jcolvin-personal-static-files.s3.ca-central-1.amazonaws.com/Unofficial+Transcript+++WebAdvisor+++University+of+Guelph.pdf">
                    here
                  </a>
                  .
                </p>
              </ScrollAnimation>
            </div>
            <div className={sass.bottom} />
          </div>
        );
    }
}

export default Education