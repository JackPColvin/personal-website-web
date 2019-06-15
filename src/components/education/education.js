import React from "react"
import sass from './education.module.scss'
import UoGImg from "../../images/University_of_Guelph_logo.svg"

import ScrollAnimation from 'react-animate-on-scroll'

class Education extends React.Component {
    render(){
        return(
            <div className={sass.pane}>
                <div className={sass.top}></div>
                <div className={sass.middle}>
                    <div className={sass.middleLogos}>
                        <img className={sass.uogLogo} src={UoGImg} alt=""></img>
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