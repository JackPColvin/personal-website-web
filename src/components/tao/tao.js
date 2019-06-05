import React from "react"
import sass from './tao.module.scss'
import TaoImg from "../../images/Tao_symbol.png"
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"

const Tao = ({ data }) => (
      <div className={sass.pane}>
        <p className={sass.yin}>
          <span className={sass.yinTitle}>Develop</span> <br />
          <span className={sass.yinList}>
            AWS <br />
            PostgreSQL <br />
            NodeJS & ExpressJS <br />
          </span>
        </p>
        <ScrollAnimation 
          animateIn= "zoomIn"
          animateOut="zoomOut"
          animateOnce = {false}
          offset={500}
          delay={100}
          className={sass.taoSymbolContainer}
        >
          <img className={sass.taoSymbol} src={TaoImg} alt="" />
        </ScrollAnimation>
        <p className={sass.yang}>
          <span className={sass.yangTitle}>Design</span> <br />
          <span className={sass.yangList}>
            ReactJS & EmberJS <br />
            HTML/CSS <br />
            Sass <br />
          </span>
        </p>
      </div>
)

export default Tao

