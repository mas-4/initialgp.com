import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title="Home" />
        <Img
            fluid={data.file.childImageSharp.fluid}
        />
    </Layout>
)

export const query = graphql`
    query {
        file(relativePath: { eq: "parallax.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }

`
export default IndexPage
