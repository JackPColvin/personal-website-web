import React from "react"
import sass from './contact.module.scss'

class Contact extends React.Component {
    render() {
        return (
            <div className={sass.parallax}>
                <div className={sass.pane}>
                    <div></div>
                    <div className={sass.entry}>
                        <div className={sass.textTitle}>Let's Talk.</div>
                    </div>
                    <div>
                    <div className={sass.entry}>
                        <div className={sass.textInfo}>Email: jackcolvin@outlook.com</div>
                    </div>
                    <div className={sass.entry}>
                        <div className={sass.textInfo}>Phone: (705)-896-3119</div>
                    </div>

                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default Contact