import React from "react"
import sass from './contact.module.scss'

import ScrollAnimation from 'react-animate-on-scroll'


class Contact extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={sass.parallax}>
                <div className={sass.pane}>
                    <div className={sass.entry}>
                        <div className={sass.text}>Let's Talk.</div>
                    </div>
                    <div className={sass.entry}>
                        <div className={sass.text}>Email: jackcolvin@outlook.com</div>
                    </div>
                    <div className={sass.entry}>
                        <div className={sass.text}>Phone: (705)-896-3119</div>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Contact