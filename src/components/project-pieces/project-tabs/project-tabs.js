import React from "react"
import sass from './project-tabs.module.scss'

import ProjectTab from '../project-tab/project-tab'

class ProjectTabs extends React.Component {
    render() {
        return (
            <div className={sass.tabs}>
                <ol className={sass.tabList}>
                    {
                        this.props.children.map((child) => {
                            return (
                                <ProjectTab
                                    activeTab={this.props.activeTab}
                                    project = {child}
                                    key = {child.id}
                                    label = {child.id}
                                    onClick={this.props.onClick}
                                >
                                </ProjectTab>
                            )
                        })
                    }
                </ol>
            </div>
        )
    }
}
export default ProjectTabs
