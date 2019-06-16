import React from "react"
import sass from './project-window.module.scss'

class ProjectWindow extends React.Component {
    constructor(props){
        super(props)
        this.state={
            project: props.project,
            queryFail: props.queryFail
        }
    }
    
    changeRender(newProject){
        this.setState({project:newProject})
    }

    render(){
        if(this.state.queryFail !== true){
            // const {
            //     state: {
            //         project
            //     }
            // } = this
            return (
                <div className={sass.window}>
                    <div className={sass.headline}>
                        <div className={sass.headlineLeft}>
                            <div className={sass.title}>
                                {this.state.project.title}
                            </div>
                            <div className={sass.blurb}>
                                {this.state.project.blurb}
                            </div>
                        </div>
                        <div className={sass.headlineRight}>
                            <img className={sass.img} src={this.state.project.image_link} alt=""></img>
                        </div>
                    </div>
                    <hr className={sass.bulletLine}></hr>
                    <div className={sass.links}>
                        {/* TODO: Replace these with buttons */}
                        <div className={sass.linksSource}>
                            <a href={this.state.project.source_link}>The Source Code</a>
                        </div>
                        <div className={sass.linksLive}>
                            <a href={this.state.project.live_link}>The Live Site</a>
                        </div>
                    </div>
                    <hr className={sass.bulletLine}></hr>
                    <div className={sass.description}>
                        {/* Bullets, for each */}
                        {this.state.project.bullets.bullets.map((e) => {
                            return (<div className={sass.bullet} key={e}>•{e}</div>)
                        })}
                    </div>
                </div>
            )
        } else{
            return(<div className={sass.error}>Call to GraphQL endpoint failed.</div>)
        }

    }
}

export default ProjectWindow