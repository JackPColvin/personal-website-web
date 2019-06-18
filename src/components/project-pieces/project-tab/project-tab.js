import React from "react"
import sass from './project-tab.module.scss'

class ProjectTab extends React.Component{
    onClick = () => {
        const {label,onClick} = this.props
        this.setState({
            activeTab: this.props.activeTab
        })
        onClick(label)
    }

    render(){
        const{
            onClick,
            props:{
                project,
                activeTab,
                label,
            }
        } = this
        let className = sass.tabListItem
        if(activeTab === label){
            className = sass.tabListActive
        }
        return (
            <div className={className}
                onClick={onClick}
            >
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
