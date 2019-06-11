import React from "react"
import sass from './project.module.scss'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import ProjectTabs from "../project-pieces/project-tabs/project-tabs";
import ProjectWindow from "../project-pieces/project-window/project-window";


class Project extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            projects:props.projects,
            activeTab: props.projects[0].id,
        }
        this.projectWindow = React.createRef()
    }

    onClickTabItem = (tab) => {
        let newProject = this.state.projects.filter(proj => proj.id === tab)[0]
        this.setState({ 
            activeTab: tab,
        })
        this.projectWindow.current.changeRender(newProject)
    }

    render(){
        let activeProject = this.state.projects[0]
        return (
            <div className={sass.pane}>
                <div className={sass.sidebar}>
                    <div className={sass.sidebarTitle}>
                        <h1>Project List</h1>
                    </div>
                    <div className={sass.sidebarBody}>
                        {/* Scroll View, All projects from the endpoint */}
                        <Element className={"element ".concat(sass.sidebarScroll)} id="scroll-container">
                            <ProjectTabs children={this.state.projects} activeTab={this.state.activeTab} onClick={this.onClickTabItem}/>
                        </Element>
                    </div>
                </div>
                <div className={sass.main}>
                    <div className={sass.mainTitle}>
                        <h1>Project Render</h1>
                    </div>
                    <div className={sass.mainBody}>
                        <ProjectWindow project={this.state.projects[0]} ref={this.projectWindow} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Project