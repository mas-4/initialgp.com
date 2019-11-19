import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from 'gatsby'

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
    return (
        <Panel>
            <Project>
                <Img fluid={{ ...data.img1.childImageSharp.fluid, aspectRatio: 1.1 }} />
            </Project>
            <Project>
                <Img fluid={{ ...data.img2.childImageSharp.fluid, aspectRatio: 1.1 }} />
            </Project>
            <Project>
                <Img fluid={{ ...data.img3.childImageSharp.fluid, aspectRatio: 1.1 }} />
            </Project>
            <Project>
                <Img fluid={{ ...data.img4.childImageSharp.fluid, aspectRatio: 1.1 }} />
            </Project>
            <Project>
                <Img fluid={{ ...data.img5.childImageSharp.fluid, aspectRatio: 1.1 }} />
            </Project>
            <Project>
                <Img fluid={{ ...data.img6.childImageSharp.fluid, aspectRatio: 1.1 }} />
            </Project>
            <Project>
                <Img fluid={{ ...data.img7.childImageSharp.fluid, aspectRatio: 1.1 }} />
            </Project>
            <Project>
                <Img fluid={{ ...data.img8.childImageSharp.fluid, aspectRatio: 1.1 }} />
            </Project>
            <Project>
                <Img fluid={{ ...data.img9.childImageSharp.fluid, aspectRatio: 1.1 }} />
            </Project>
        </Panel>
    )
}

export default ProjectsPanel
