import React from "react"
import sass from './project-window.module.scss'

class ProjectWindow extends React.Component {
    constructor(props){
        super(props)
        this.state={
            project: props.project
        }
        console.log(this.state.project)
    }

    
    changeRender(newProject){
        this.setState({project:newProject})
    }

    render(){
        const {
            state: {
                project
            }
        } = this
        return(
            <div className={sass.window}>
                <div className={sass.headline}>
                    <div className={sass.headlineLeft}>
                        <div className={sass.title}>
                            {this.state.project.title}
                        </div>
                        <div classname={sass.blurb}>
                            {this.state.project.blurb}
                        </div>
                    </div>
                    <div className={sass.headlineRight}>
                        <img className={sass.img} src={this.state.project.image_link}></img>
                    </div>
                </div>          
                <hr className={sass.bulletLine}></hr>
                <div className={sass.links}>
                    {/* TODO: Replace these with buttons */}
                    <div className={sass.linksSource}>
                        Source Link: <a href={this.state.project.live_link}>HERE</a>
                    </div>
                    <div className={sass.linksLive}>
                        Live Link: <a href={this.state.project.source_link}>HERE</a>
                    </div>
                </div>
                <hr className={sass.bulletLine}></hr>
                <div className={sass.description}>
                    {/* Bullets, for each */}
                    {this.state.project.bullets.bullets.map((e)=>{
                        return (<div className={sass.bullet}>•{e}</div>)
                    })}
                </div>          
                
                
                
            </div>
        )
    }
}

export default ProjectWindow