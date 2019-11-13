import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import HeroPanel from '../components/landing/heropanel'
import AboutPanel from '../components/landing/aboutpanel'
import MissionPanel from '../components/landing/missionpanel'
import ServicesPanel from '../components/landing/servicespanel'

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title='Home' />
        <HeroPanel />
        <MissionPanel />
        <AboutPanel />
        <ServicesPanel />
    </Layout>
)

export default IndexPage
