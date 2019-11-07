import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import StyledParallax from "../components/parallax"
import LeadAbout from "../components/leadabout"


const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <StyledParallax />
        <LeadAbout />
    </Layout>
)

export default IndexPage
