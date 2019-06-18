import React from "react"
import sass from './tao.module.scss'
import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.min.css"
import Img from "gatsby-image"

class Tao extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tao: props.tao
    }
  }
  render(){
    return(
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
            <Img fluid={this.props.tao.childImageSharp.fluid}/>
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
  }
}
export default Tao

