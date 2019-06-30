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
    let queryFail = false
    if(data.personalgraphql == null){
        data.personalgraphql = {projects:[]}
        queryFail = true
    }
    return (
        <Layout>
            <SEO
                title="For Hire."
            />
            <div style={rootTile}><Intro tile={data.tile}/></div>
            <div style={rootTile}><Tao tao={data.tao}/></div>
            <div style={rootTile}><Parallax bitmoji={data.bitmoji} /></div>
            <div style={rootTile}><Project projects={data.personalgraphql.projects} queryFail={queryFail}/></div>
            <div style={rootTile}><Education logo={data.uogLogo} /></div>
            <div style={rootTile}><Contact /></div>
        </Layout>  
    )
}


export const query = graphql`
         query IndexQuery {
           personalgraphql {
             projects {
               id
               title
               blurb
               bullets
               source_link
               live_link
               image_link
             }
           }
           site {
             siteMetadata {
               title
               description
               author
             }
           }
           tao: file(relativePath: { eq: "Tao_symbol.png" }) {
             childImageSharp {
               fluid(maxWidth: 500) {
                 ...GatsbyImageSharpFluid
               }
             }
           }
           firewatch: file(relativePath: { eq: "firewatch.jpg" }) {
             childImageSharp {
               fluid(maxWidth: 1000) {
                 ...GatsbyImageSharpFluid
               }
             }
           }
           contactParallax: file(relativePath: { eq: "contactParallax.jpg" }) {
             childImageSharp {
               fluid(maxWidth: 1000) {
                 ...GatsbyImageSharpFluid
               }
             }
           }
           bitmoji: file(relativePath: { eq: "bitmoji.jpg" }) {
             childImageSharp {
               fluid(maxWidth: 500) {
                 ...GatsbyImageSharpFluid
               }
             }
           }
           tile: file(relativePath: { eq: "tile.jpg" }) {
             childImageSharp {
               fluid(maxWidth: 300) {
                 ...GatsbyImageSharpFluid
               }
             }
           }
           uogLogo: file(relativePath: { eq: "University_of_Guelph_logo.png" }) {
             childImageSharp {
               fluid(maxWidth: 800) {
                 ...GatsbyImageSharpFluid
               }
             }
           }
         }
       `;

export default IndexPage
