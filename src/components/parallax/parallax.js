import React from "react"
import sass from './parallax.module.scss'
import Bitmoji from "../../images/bitmoji.png"
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"
// import Img from "gatsby-image"

const Parallax = ({ data }) => (
    <div className={sass.parallax}>
        <ScrollAnimation className={sass.funFacts}
            animateIn="fadeIn"
            animateOut="fadeOut"
            offset={200}
        >
            <p className={sass.title}>
                Aside from quality time in nature, there's nothing I enjoy more than building software. <br />
                Below, you can find some of my projects and a summary of my education. <br />
            </p>
        </ScrollAnimation>
        <ScrollAnimation className={sass.bitmoji}
            animateIn="fadeIn"
            animateOut="fadeOut"
            offset={200}
        >
            <img src={Bitmoji} className={sass.bitmojiImage} alt="" />
        </ScrollAnimation> 
    </div>
)

export default Parallax