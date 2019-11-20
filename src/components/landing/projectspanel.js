import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import Fade from 'react-reveal/Fade'
import { useStaticQuery, graphql } from 'gatsby'

const TitlePanel = styled.div`
    width: 100%;
    margin: 10rem 0;
`
const Title = styled.h1`
    font-size: 500%;
    margin: 0 auto;
    text-align: center;
    padding: 1.5rem;
    width: 20%;
    line-height: 0.8;
    border: 1rem solid red;
`

const Panel = styled.div`
    background-color: rgba(41, 41, 41, 0.78);
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`
const Project = styled.div`
    width: 33.3333%
`

const ProjectsPanel = () => {
    const data = useStaticQuery(graphql`
        fragment squareImage on File {
            childImageSharp {
                fluid(quality: 90) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        query {
            img1: file(relativePath: { eq: "jobs/VueFront.jpg" }) {
                ...squareImage
            }
            img2: file(relativePath: { eq: "jobs/ShoreMariner.jpg" }) {
                ...squareImage
            }
            img3: file(relativePath: { eq: "jobs/TidesBeachClub.jpg" }) {
                ...squareImage
            }
            img4: file(relativePath: { eq: "jobs/UltimarIII.jpg" }) {
                ...squareImage
            }
            img5: file(relativePath: { eq: "jobs/SarasotaBayClub.jpg" }) {
                ...squareImage
            }
            img6: file(relativePath: { eq: "jobs/Seaglass2.jpg" }) {
                ...squareImage
            }
            img7: file(relativePath: { eq: "jobs/Aria.jpg" }) {
                ...squareImage
            }
            img8: file(relativePath: { eq: "jobs/BeauCiel.jpg" }) {
                ...squareImage
            }
            img9: file(relativePath: { eq: "jobs/BeauRivageStTropezAndRiviera.jpg" }) {
                ...squareImage
            }
        }
    `)
    const dataArr = Object.entries(data)
    return (
        <>
            <TitlePanel>
                <Fade top>
                    <Title>What We've Done</Title>
                </Fade>
            </TitlePanel>
            <Panel>
                {dataArr.map(([key, value]) => {
                    return (
                        <Project>
                            <Img fluid={{...value.childImageSharp.fluid, aspectRatio: 1.1}} />
                        </Project>
                        )
                })}
            </Panel>
        </>
        )
    }

    export default ProjectsPanel
