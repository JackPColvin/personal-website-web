import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Tao from "../components/tao/tao"
import Intro from "../components/intro/intro"
import Parallax from "../components/parallax/parallax"
import Project from "../components/project/project"
import Education from "../components/education/education"
import Contact from "../components/contact/contact"



const IndexPage = () =>(
    <Layout>
        <SEO title="Jack Colvin Developer"></SEO>
        {/* First Pane (Tao) */}
        <div style={{
            display: "flex",
            flexDirection: "rows"
        }}> <Intro />
        </div>
        {/* First Pane (Tao) */}
        <div style={{
            display:"flex",
            flexDirection:"rows"
        }}>
            <Tao/>
        </div>
        {/* First Pane (Tao) */}
        <div style={{
            display: "flex",
            flexDirection: "rows"
        }}> <Parallax />
        </div>
    </Layout>  
)

export default IndexPage
