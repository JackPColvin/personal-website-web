import React from "react"
import sass from './project-tabs.module.scss'

import ProjectTab from '../project-tab/project-tab'

class ProjectTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: this.props.activeTab,
            onClick: this.props.onClick
        }
    }

    render() {
        const {
            props:{
                children,
            },
            state: {
                activeTab
            },
            onClickTabItem
        } = this;
        return (
            <div className={sass.tabs}>
                <ol className={sass.tabList}>
                    {
                        this.props.children.map((child) => {
                            return (
                                <ProjectTab
                                    activeTab={this.state.activeTab}
                                    project = {child}
                                    key = {child.id}
                                    label = {child.id}
                                    onClick={this.state.onClick}
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
