import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import StyledParallax from "../components/parallax"


const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <StyledParallax />
    </Layout>
)

export default IndexPage
