import React from "react"
import { graphql } from "gatsby"

//import modules
import Layout from "../components/layout"
import SEO from "../components/seo"

import Services from "../components/services"

import { Helmet } from "react-helmet"

const ServicesPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Services" description="Find all our services here." />
      <Helmet>
        <body className="services-page" />
      </Helmet>
      <Services items={data} />
    </Layout>
  )
}
export default ServicesPage

export const query = graphql`
  query {
    servicesData: site {
      siteMetadata {
        servicesPage {
          listingPage {
            heading
            subHeading
          }
        }
      }
    }
    servicesPosts: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { collection: { eq: "services" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            cover {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
