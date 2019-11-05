import { useStaticQuery, graphql, Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.png"

const Container = styled.header`
    background-color: white;
    display: flex;
    margin: 0.25rem;
    justify-content: space-around;
`
const Nav = styled.nav`
    a {
        margin: 0.5rem;
        text-decoration: none;
        color: black;
    }
`
const Title = styled.h1`
    img {
        vertical-align: top;
    }
    a {
        text-decoration: none;
        color: black;
        margin: auto 0.25rem;
    }
`

const Header = () => {
    const data = useStaticQuery(
        graphql`query { site { siteMetadata { title } } }`
    )
    return (
        <Container>
            <Title>
                <Link to="/" >
                    <img src={logo} alt="Logo" height="40" />
                </Link>
                <Link to="/" >{data.site.siteMetadata.title}</Link>
            </Title>
            <Nav>
                <Link to="about">About</Link>
                <Link to="projects">Projects</Link>
                <Link to="services">Services</Link>
                <Link to="contact">Contact</Link>
            </Nav>
        </Container>
    )
}

export default Header
