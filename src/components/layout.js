import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
  `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            <div>
                <main>{children}</main>
                <footer>
                    © {new Date().getFullYear()} Glendale Painting Corporation, Built with
                        {` `}<a href="https://www.gatsbyjs.org">Gatsby</a>
                    </footer>
                </div>
            </>
    )
}

export default Layout
