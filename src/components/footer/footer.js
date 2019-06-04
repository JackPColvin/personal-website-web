import React from "react"
import sass from "./footer.module.scss"

const Footer = () =>{
    return(
        <div className={sass.footerContainer}>
            <hr></hr>
            <footer>
                Created by Jack Colvin, © {new Date().getFullYear()}
            </footer>
        </div>
    )
}
        
export default Footer