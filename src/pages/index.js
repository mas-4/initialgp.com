import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import HeroPanel from "../components/landing/heropanel.js"
import AboutPanel from "../components/landing/aboutpanel.js"


const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <HeroPanel />
        <AboutPanel />
    </Layout>
)

export default IndexPage
