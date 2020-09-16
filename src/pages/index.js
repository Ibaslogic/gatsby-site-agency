import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import OurClients from "../components/homePage/ourClients"
import ServicesItems from "../components/homePage/servicesItems"
import Testimonial from "../components/homePage/testimonial"

import Hero from "../components/hero"

const IndexPage = ({ data }) => {
  // const { homeHero } = data.homePageHeroImage.siteMetadata
  const { homePage } = data.homePageHeroImage.siteMetadata
  const homeHero = homePage.hero_content.homeHero
  const { heroContent } = data

  return (
    <Layout>
      <SEO title="Home" />
      <Helmet>
        <body className="home-page" />
      </Helmet>
      <main className="main" role="main">
        <Hero
          heroContent={heroContent.siteMetadata.homePage.hero_content}
          filename={`${homeHero || `home_hero.jpg`}`}
        />
        <OurClients />
        <ServicesItems />
        <Testimonial />
      </main>
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query {
    homePageHeroImage: site {
      siteMetadata {
        homePage {
          hero_content {
            homeHero
          }
        }
      }
    }
    heroContent: site {
      siteMetadata {
        homePage {
          hero_content {
            headingText
            descriptionText
            buttonText
            typeWriter
          }
        }
      }
    }
  }
`
