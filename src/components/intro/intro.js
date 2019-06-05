import React from "react"
import sass from './intro.module.scss'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"

const Intro = () => (
    <div>
        <ScrollAnimation
            animateIn="flipInY"
            offset={500}
            className={sass.pane}
        >
            <p className={sass.title}>
                <span className={sass.nametag}>
                Jack Colvin:</span> <br />
                Full Stack  <br /> Software Developer <br/>
            </p>
        </ScrollAnimation>
    </div>
)

export default Intro