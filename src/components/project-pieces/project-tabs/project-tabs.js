import React from "react"
import sass from './project-tabs.module.scss'

import ProjectTab from '../project-tab/project-tab'

class ProjectTabs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: this.props.children[0]
        }
    }

    onClickTabItem = (tab) => {
        this.setState({activeTab: tab})
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
        return (<div className={sass.pane}>
            <div className={sass.tabs}>
                <ol className={sass.tabList}>
                    {
                        this.props.children.map((child) => {
                            return (
                                <ProjectTab
                                    project = {child}
                                    activeTab={activeTab}
                                    onClick={onClickTabItem}
                                    label = {child.title}
                                >
                                    
                                </ProjectTab>
                            )
                        })
                    }
                </ol>
            </div>
        </div>)
    }
}
export default ProjectTabs
