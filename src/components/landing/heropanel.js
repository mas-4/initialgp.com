import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Screen = styled.div`
    height: 50rem;
    color: white;
    background: rgba(0, 0, 0, 0.4);
`
const HeroText = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 5rem;
    background: rgba(0, 0, 0, 0.5);
    h1 {
        font-size: 500%;
        width: 85%;
        margin: 0 0 8% 7%;
        padding: 0 0 0 1rem;
        line-height: 0.9;
        border-left 1rem solid red;
    }
    h2 { font-size: 225%; }
`
const UnstyledHeroPanel = ({ className }) => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: { eq: "parallax.jpg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 3000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return(
        <BackgroundImage
            Tag="section"
            className={className}
            fluid={data.file.childImageSharp.fluid}
            alt="Belle Harbor"
        >
            <Screen>
                <HeroText>
                    <h1>Serving the Southeast Since 1985</h1>
                    <h2>With over three decades in the industry, Glendale has you covered.</h2>
                </HeroText>
            </Screen>
        </BackgroundImage>
    )
}

const HeroPanel = styled(UnstyledHeroPanel)`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`

export default HeroPanel
