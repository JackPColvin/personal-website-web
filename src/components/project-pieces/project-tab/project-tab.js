import React from "react"
import sass from './project-tab.module.scss'

class ProjectTab extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state={
            project : props.project,
            label : props.project.title
        }
    }

    onClick = () => {
        const {label,onClick} = this.props
        onClick(label)
    }
    render(){
        const{
            props:{
                project,
                activeTab,
                label,
            }
        } = this
        let className = "tabListItem"
        if(activeTab === label){
            className += " tabListActive"
        }
        return (
            <div className={className}>
                <div className={sass.top}>
                    {project.title}
                </div>
                <div className={sass.bottom}>
                    {project.blurb}
                </div>
            </div>
        )
    }
}
export default ProjectTab
