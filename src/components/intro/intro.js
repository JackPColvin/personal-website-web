import React from "react"
import sass from './intro.module.scss'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"

const Intro = () => (
    <div>
        <ScrollAnimation
            animateIn="flipInY"
            offset={500}
            animateOnce={true}
            className={sass.pane}
        >
            <p className={sass.title}>
                <span className={sass.nametag}>Jack Colvin:</span> <br />
                <span className={sass.nametag}>Full Stack Software Developer</span> <br />
            </p>
        </ScrollAnimation>
    </div>
)

export default Intro