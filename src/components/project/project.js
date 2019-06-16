import React from "react"
import sass from './project.module.scss'
import { Element } from 'react-scroll'
import ProjectTabs from "../project-pieces/project-tabs/project-tabs";
import ProjectWindow from "../project-pieces/project-window/project-window";


class Project extends React.Component {
    constructor(props){
        super(props)
        if(props.queryFail === true){
            this.state = {
                projects: props.projects,
                activeTab: null,
                queryFail: props.queryFail
            }
        }else{
            this.state ={
                projects:props.projects,
                activeTab: props.projects[0].id,
                queryFail: props.queryFail
            }
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
                        <h1 className={sass.sidebarTitleText}>Project List</h1>
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
                        <h1 className={sass.mainTitleText}>Project Render</h1>
                    </div>
                    <div className={sass.mainBody}>
                        <Element className={"element ".concat(sass.mainScroll)} id="scroll-container">
                            <ProjectWindow project={activeProject} ref={this.projectWindow} queryFail={this.state.queryFail}/>
                        </Element>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project