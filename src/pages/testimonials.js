import React from "react"
import { graphql } from "gatsby"

//import modules
import Layout from "../components/layout"
import SEO from "../components/seo"
import TestimonialItems from "../components/testimonial/testimonialitems"

import { Helmet } from "react-helmet"

const TestimonialPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Testimonial" description="What are customers are saying." />
      <Helmet>
        <body className="testimonial-page" />
      </Helmet>
      <TestimonialItems items={data} />
    </Layout>
  )
}
export default TestimonialPage

export const query = graphql`
  query {
    testimonialData: site {
      siteMetadata {
        testimonialPage {
          heading
          subHeading
        }
      }
    }
    testimonialPosts: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fields: { collection: { eq: "testimonial" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            name
            title
            date(formatString: "Do MMM, YYYY")
            photo {
              childImageSharp {
                fixed(height: 52) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
          html
        }
      }
    }
  }
`
