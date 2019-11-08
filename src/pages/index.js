import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroPanel from "../components/landing/heropanel"
import AboutPanel from "../components/landing/aboutpanel"

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <HeroPanel />
        <AboutPanel />
    </Layout>
)

export default IndexPage
