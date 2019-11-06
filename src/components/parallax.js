import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Screen = styled.div`
    height: 50rem;
    color: white;
    background: rgba(0, 0, 0, 0.3);
    position: relative;
`
const HeroText = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    padding: 5rem;
    background: rgba(0, 0, 0, 0.3);
`

const Parallax = ({ className }) => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: file(relativePath: { eq: "parallax.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 3000) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        `}
        render={data => {
            const imageData = data.placeholderImage.childImageSharp.fluid
            return (
                <BackgroundImage
                    Tag="section"
                    className={className}
                    fluid={imageData}
                    backgroundColor={`#040e18`}
                >
                    <Screen>
                        <HeroText>
                            <h1>Serving the Southeast</h1>
                            <h2>With over three decades in the industry, Glendale has you covered.</h2>
                        </HeroText>
                    </Screen>
                </BackgroundImage>
            )
        }}
    />
)

const StyledParallax = styled(Parallax)`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
`

export default StyledParallax
