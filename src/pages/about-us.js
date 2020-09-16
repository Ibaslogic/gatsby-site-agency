import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import AboutContent from "../components/about"

const About = () => {
  return (
    <Layout>
      <SEO title="About" description="Read about us here" />
      <Helmet>
        <body className="about-page" />
      </Helmet>
      <AboutContent />
    </Layout>
  )
}
export default About
