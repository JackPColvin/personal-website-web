import React from "react"
import sass from './project.module.scss'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ProjectTabs from "../project-pieces/project-tabs/project-tabs";

class Project extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            projects:props.projects,
        }
    }

    handleSidebarSelect(){
        
    }

    render(){
        let active

        return (
            <div className={sass.pane}>
                <div className={sass.sidebar}>
                    <div className={sass.sidebarTitle}>
                        <h1>Project List</h1>
                    </div>
                    <div className={sass.sidebarBody}>
                        {/* Scroll View, All projects from the endpoint */}
                        <Element className={"element ".concat(sass.sidebarScroll)} id="scroll-container">
                            <ProjectTabs children={this.state.projects}/>
                        </Element>
                    </div>
                </div>
                <div className={sass.main}>
                    <div className={sass.mainTitle}>
                        <h1>Project Render</h1>
                    </div>
                    <div className={sass.mainBody}>
                        {/* ProjectRender */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Project