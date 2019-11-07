import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const Screen = styled.div`
    background: rgba(255, 255, 255, 0.5);
    width: 35%;
    margin: 0;
    margin-left: 10%;
    padding: 7% 10% 3% 6%;
`
const Title = styled.h1`
    font-size: 500%;
    width: 75%;
    margin: 0 0 8% 7%;
    padding: 0 0 0 1rem;
    line-height: 0.8;
    border-left 1rem solid red;
`

const LogoBacking = ({ className }) => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: file(relativePath: { eq: "logo.png" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 500) {
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
                        backgroundColor={`#ff9999`}
                    >
                        <Screen>
                            <Title>Who We Are</Title>
                            <p>
                                Glendale is a family business in the Tampa Bay
                                Area servicing the State of Florida for over 3
                                decades. Run by two brothers, Rick and Kevin,
                                since 1985, over the last 33 years the company
                                has grown into a premier quality painting and
                                restoration contractor in Florida.
                            </p>
                            <p>
                                The company's mission statement and guiding
                                principle has been "Take care of the customer
                                and everything else will take care of itself".
                            </p>
                            <p>
                                Glendale employees are only focused on one
                                thing, doing it right: "Customer Service is who
                                we are. Doing things right is all we know".
                            </p>
                            <p>
                                Our work history speaks to our capabilities.
                                Our testimonials speak to our quality and
                                customer service. The age of our company speaks
                                to our integrity, commitment and work ethic.
                                The importance we place on communication with
                                our clients speaks to our success.
                            </p>
                        </Screen>
                    </BackgroundImage>
                )
            }}
        />
    )

    const LeadAbout = styled(LogoBacking)`
    background-position: 25%;
    background-repeat: no-repeat;
    background-size: auto;
    background-attachment: fixed;
    `

    export default LeadAbout
