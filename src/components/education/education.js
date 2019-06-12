import React from "react"
import sass from './education.module.scss'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import UoGImg from "../../images/University_of_Guelph_logo.svg"

import ScrollAnimation from 'react-animate-on-scroll'

class Education extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className={sass.pane}>
                <div className={sass.top}></div>
                <div className={sass.middle}>
                    <div className={sass.middleLogos}>
                        <img className={sass.uogLogo} src={UoGImg}></img>
                        {/* <div className={sass.additionalLogos}>
                            <div>
                                <img src={CompLogo} className={sass.compLogo}></img>
                            </div>
                            <div>
                                <img src={EconLogo} className={sass.econLogo}></img>
                            </div>
                        </div> */}
                    </div>
                    <ScrollAnimation
                        animateIn="zoomIn"
                        animateOut="zoomOut"
                        animateOnce={false}
                        offset={100}
                        delay={100}
                        className={sass.middleText}
                    >
                        <p>Jack graduated with honour's from the University of Guelph in 2019,
                        earning a degree in Computer Science and a minor in Economics.</p>
                        <p>His academic standing allows him to pursue a Master's degree in the future.</p>
                        <p>You can take a look at his unofficial transcript <a href="https://jcolvin-personal-static-files.s3.ca-central-1.amazonaws.com/Unofficial+Transcript+++WebAdvisor+++University+of+Guelph.pdf">here</a></p>
                    </ScrollAnimation>
                </div>
                <div className={sass.bottom}></div>
            </div>
        )
    }
}

export default Education