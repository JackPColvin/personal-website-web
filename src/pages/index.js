import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Tao from "../components/tao/tao"
import Intro from "../components/intro/intro"


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
        }}> <p>Jack Colvin</p>
        </div>
    </Layout>  
)

export default IndexPage
