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
            <div className={sass.pane}>
                <span className={sass.title}>
                    {this.state.project.title} <br />
                </span>

                {this.state.project.blurb} <br />
                {this.state.project.live_link} <br />
                {this.state.project.source_link}<br />
                {this.state.project.image_link}<br />
                STOP
            </div>
        )
    }
}

export default ProjectWindow