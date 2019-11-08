import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const UnstyledParallax = ({ className, imagename, children }) => {
    const data = useStaticQuery(graphql`
        query {
            allImageSharp {
                edges {
                    node {
                        fluid {
                            originalName
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    `)

    const imagedata = data.allImageSharp.edges.filter(
        (x) => { return x.node.fluid.originalName === imagename }
    )[0].node.fluid

    return (
        <BackgroundImage
            Tag="section"
            className={className}
            fluid={imagedata}
        >
            {children}
        </BackgroundImage>
    )
}

const Parallax = styled(UnstyledParallax)`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`

export default Parallax
