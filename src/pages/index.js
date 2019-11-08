import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroPanel from '../components/landing/heropanel'
import AboutPanel from '../components/landing/aboutpanel'
import MissionPanel from '../components/landing/missionpanel'

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title='Home' />
        <HeroPanel />
        <MissionPanel />
        <AboutPanel />
    </Layout>
)

export default IndexPage
