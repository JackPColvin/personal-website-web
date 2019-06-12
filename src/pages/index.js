import React from "react"
import Layout from "../components/layout/layout"
import {graphql} from "gatsby"
import SEO from "../components/seo/seo"
import Tao from "../components/tao/tao"
import Intro from "../components/intro/intro"
import Parallax from "../components/parallax/parallax"
import Project from "../components/project/project"
import Education from "../components/education/education"
import Contact from "../components/contact/contact"

const rootTile = {
    display: "flex",
    flexDirection: "rows"
}

const IndexPage = ({data}) =>{
    return (
        <Layout>
            <SEO title="Jack Colvin Developer"></SEO>
            <div style={rootTile}> <Intro /></div>
            <div style={rootTile}><Tao/></div>
            <div style={rootTile}> <Parallax /></div>
            <div style={rootTile}> <Project projects={data.personalgraphql.projects}/></div>
            <div style={rootTile}> <Education /></div>
            <div style={rootTile}> <Contact /></div>
        </Layout>  
    )
}

export default IndexPage

export const query = graphql`
    query IndexQuery{
        personalgraphql{
            projects{
                id
                title
                blurb
                bullets
                source_link
                live_link
                image_link
            }
        }
    }
`