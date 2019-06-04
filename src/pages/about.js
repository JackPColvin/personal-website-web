import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
const AboutPage = () => (
    <Layout>
        <SEO title="About Jack Colvin" />
        <div>
            <h1>About Me</h1>
        </div>
        <div>
            <p>
                I'm a full stack developer. Go GatsbyJS! I also did well in school. <br/>
                Check it out here: <a href="https://jcolvin-personal-static-files.s3.ca-central-1.amazonaws.com/Unofficial+Transcript+++WebAdvisor+++University+of+Guelph.pdf">Transcript</a>
            </p>
        </div>
    </Layout>
)

export default AboutPage
